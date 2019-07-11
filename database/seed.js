var mysql = require('mysql2/promise');
var faker = require('faker');
var connectionConfig = require('../config/connectionConfig')
faker.seed(0);

function dateToMySqlDatetime (date) {
  return date.toISOString().slice(0, 19).replace('T', ' ')
}
function input (val, chance) {
 return chance > 0.8 ? val: null;
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
  let replyChance = Math.random()
  return {
    "author": faker.name.findName(),
    "icon_url": faker.image.avatar(),
    "review_date": dateToMySqlDatetime(faker.date.past()),
    "review_content": faker.lorem.paragraph(),
    "reply_date": input(dateToMySqlDatetime(faker.date.past()), replyChance),
    "reply_content": input(faker.lorem.paragraph(), replyChance),
    "listings_id": listing_id
  }
}

function objToInsert (obj, table) {
  var columns = Object.keys(obj).map((val) => '`' + val + '`').join(',')
  var values = Object.values(obj).map(mysql.escape).join(',')
  return `INSERT INTO ${table} (${columns}) VALUES (${values});`
}
 // potentally we want to extract this "pool creation" elsewhere, so if another developer intends
 // to "seed" the database they would have a single file to modify to their credentials
async function main () {
  var pool = mysql.createPool(connectionConfig);

  var listingsQueries = [];
  var reviewsQueries = [];

  for(var i = 0; i < 100; i++) {
    var listingsSql = objToInsert(buildListing(), 'listings');
    var queryPromise = pool
      .query(listingsSql)
      .then(([rows, fields]) => {
        console.log(rows, fields);

        var rowID = rows.insertId
        var numberOfReviews = faker.random.number({min:100, max:300})
        console.log({ listingID: rowID, numReviews: numberOfReviews })
        for (var j = 0; j < numberOfReviews; j++) {
          reviewsSql = (objToInsert(buildReview(rowID), 'reviews'));
          console.log(reviewsSql)
          var reviewPromise = pool
            .query(reviewsSql)
            .catch(console.log)
          reviewsQueries.push(reviewPromise)
        }

      })
      .catch(console.log)

      listingsQueries.push(queryPromise)
  }

  try {
    console.log('waiting for listings queries to complete')
    await Promise.all(listingsQueries)
    console.log('waiting for reviews queries to complete')
    await Promise.all(reviewsQueries)
    console.log({ resolved: reviewsQueries.length })
    console.log({ resolved: listingsQueries.length })
    console.log('seed completed!')
  } catch(error) {
    console.error(error)
  }

  pool.end()
  console.log('pool closed')
}
main();