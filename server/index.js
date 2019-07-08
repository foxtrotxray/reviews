const db = require('./db')
const express = require('express');
let server = express();
server.use(express.static(__dirname + '/../public'));
server.use(express.urlencoded({ extended: true }))

server.get('/:listing/:query', function (req, res) {
  console.log('got a GET with a query!');
  let result = db.connection().execute(`select * from reviews where review_content like ?  AND listings_id = ?;
  `,[`%${req.params.query}%`, req.params.listing], function (err, results, fields) {
    console.log(req.params);

    res.json(results)
  })
});
server.get('/:listing', function (req, res) {
  console.log('got a GET!');
  let result = db.connection().execute(`SELECT * FROM reviews WHERE listings_id = ?`,[req.params.listing], function (err, results, fields) {
    console.log(req.params);

    res.json(results)
  })
});


let port  = 9999
server.listen(port, function() {
  console.log (`Server Started! port #: ${port}`)
})