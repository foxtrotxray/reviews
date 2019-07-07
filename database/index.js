var mysql = require('mysql2');
var connectionConfig = require('../config/connectionConfig');
var connection = mysql.createConnection(connectionConfig);
connection.query('SELECT * FROM listings', function (error, results, fields) {
  if (error) throw error;
  console.log(results)
  // connected!
});