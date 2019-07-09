var mysql = require('mysql2');
var connectionConfig = require('../config/connectionConfig');


exports.connection = function () {
  return mysql.createConnection(connectionConfig);
}
