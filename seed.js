var mysql = require('mysql2/promise');
var faker = require('faker');



function dateToMySqlDatetime (date) {
  return date.toISOString().slice(0, 19).replace('T', ' ')
}

function buildListing () {
  return {
    "location_name": faker.address.streetAddress(),
    "owner_name": faker.name.findName(),
    "owner_icon_url": faker.image.avatar(),
    "review_score": faker.random.number(5),
    "accuracy_score": faker.random.number(5),
    "communication_score": faker.random.number(5),
    "cleanliness_score": faker.random.number(5),
    "location_score": faker.random.number(5),
    "check_in_score": faker.random.number(5),
    "value_score": faker.random.number(5)
  }
}
function buildReview (listing_id) {
  return {
    "author": faker.name.findName(),
    "icon_url": faker.image.avatar(),
    "review_date": dateToMySqlDatetime(faker.date.past()),
    "review_content": faker.lorem.paragraph(),
    "reply_date": dateToMySqlDatetime(faker.date.past()),
    "reply_content": faker.lorem.paragraph(),
    "listings_id": listing_id
  }
}

function objToInsert (obj, table) {
  var columns = Object.keys(obj).map((val) => '`' + val + '`').join(',')
  var values = Object.values(obj).map(mysql.escape).join(',')
  return `INSERT INTO ${table} (${columns}) VALUES (${values});`
}

async function main () {
  var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'kyle',
    password : '',
    database : 'reviews_database',
    waitForConnection: true,
    connectionLimit: 100,
    queueLimit: 0
  });

  var queries = [];

  for(var i = 0; i < 100; i++) {
    var listingsSql = objToInsert(buildListing(), 'listings');
    var queryPromise = pool
      .query(listingsSql)
      .then(([rows, fields]) => {
        console.log(rows, fields);

        var rowID = rows.insertId
        var numberOfReviews = faker.random.number({min:10, max:30})
        console.log({ listingID: rowID, numReviews: numberOfReviews })
        for (var j = 0; j < numberOfReviews; j++) {
          reviewsSql = (objToInsert(buildReview(rowID), 'reviews'));
          console.log(reviewsSql)
          var reviewPromise = pool
            .query(reviewsSql)
            .catch(console.log)
          queries.push(reviewPromise)
        }
      })
      .catch(console.log)

      queries.push(queryPromise)
  }

  console.log('waiting for queries to complete')
  await Promise.all(queries)
  console.log({ resolved: queries.length })
  console.log('seed completed!')

  pool.end()
  console.log('pool closed')
}
main();