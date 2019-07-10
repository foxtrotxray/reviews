const db = require('./db')
const express = require('express');
let server = express();
server.use(express.static(__dirname + '/../public'));
server.use(express.urlencoded({ extended: true }))
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/:listing/:query', function (req, res) {
  console.log('got a GET with a query!');
  let result = db.connection().execute(`select * from reviews where reply_content like ? AND listings_id = ? OR review_content like ? AND listings_id = ?;
  `,[`%${req.params.query}%`,req.params.listing ,`%${req.params.query}%`, req.params.listing], function (err, results1, fields)
  {
    let secondSelect = db.connection().execute(`SELECT * FROM listings WHERE id = ?`, [req.params.listing], function (err, results2, fields) {
      let output = Object.assign(results1, results2)
      if (Object.keys(output).length <= 1) {
        res.json('No reviews match your search!')
      } else {
        res.json(output)
      }
    })

    console.log(req.params);
  })
});
server.get('/:listing', function (req, res) {
  console.log('got a GET!');
  if(req.params.listing <= 100) {
    console.log(req.params);
    let result = db.connection().execute(`SELECT * FROM reviews WHERE listings_id = ?`,[req.params.listing], function (err, results1, fields) {
      let secondSelect = db.connection().execute(`SELECT * FROM listings WHERE id = ?`, [req.params.listing], function (err, results2, fields) {
        res.json(Object.assign(results1, results2))
      })
    })
  } else {
    console.log('404!')
    res.sendStatus(404)
  }
});

module.exports = server
// SELECT * FROM reviews RIGHT JOIN listings ON reviews.listing_id = listings.id WHERE reviews.listings_id = ?