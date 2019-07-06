var mysql = require('mysql');
var faker = require('faker');

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
function buildReview () {
  return {
    "author": faker.name.findName(),
    "icon_url": faker.image.avatar(),
    "review_date": faker.date.past(),
    "review_content": faker.lorem.paragraph(),
    "reply_date": faker.date.past(),
    "reply_content": faker.lorem.paragraph(),
    "listings_id": faker.random.number(100)
  }
}
console.log(buildReview())
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

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});
var sql = objToInsert(buildReview(), 'listings');

console.log(sql)
connection.query(sql, function (error, results) {
  if (error) throw error;
  console.log(results)
});

connection.end(function(err) {
  console.log('connection closed!')
});