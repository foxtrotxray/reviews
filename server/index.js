const db = require('./db')
const express = require('express');
let server = express();
server.use(express.static(__dirname + '/../public'));
server.use(express.urlencoded({ extended: true }))

server.get('/', function (req, res) {
  console.log('got a GET!');
  let result = db.connection().query('SELECT id, location_name, owner_name, owner_icon_url FROM listings', function (err, results, fields) {
    // console.log(results);

    res.json(results)
  })
});

let port  = 9999
server.listen(port, function() {
  console.log (`Server Started! port #: ${port}`)
})