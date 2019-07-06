const express = require('express');
let server = express();
server.use(express.static(__dirname + '/../public'));
server.use(express.urlencoded({ extended: true }))

server.get('/', function (req, res) {
  console.log('got a GET!');
  res.send('this server is active!')
});

let port  = 9999
server.listen(port, function() {
  console.log (`Server Started! port #: ${port}`)
})