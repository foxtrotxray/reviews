var mysql = require('mysql2');
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

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'kyle',
  password : '',
  database : 'reviews_database'
});


var listingsSql = objToInsert(buildListing(), 'listings');

console.log(listingsSql)
connection.promise()
  .query(listingsSql)
  .then(([rows, fields]) => {
    console.log(rows, fields);
    var rowID = rows.insertId
      reviewsSql = (objToInsert(buildReview(rowID), 'reviews'));
      console.log(reviewsSql)
      connection.promise()
        .query(reviewsSql)
        .catch(console.log)
  })
  .catch(console.log)
  .then(() => connection.end())
