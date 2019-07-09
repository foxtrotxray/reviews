const supertest = require('supertest');
const server = require('./server.js');

describe('GET /1', function() {
  it('responds with json & matches length', function(done) {
    supertest('localhost:9999')
      .get('/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15514')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('GET /1000', function() {
  it('responds with 404 if a non-existant path is specified', function(done) {
    supertest('localhost:9999')
      .get('/1000')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('GET /1/nihil', function() {
  it('responds to a query with only the matching reviews', function(done) {
    supertest('localhost:9999')
      .get('/1/nihil')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '3672')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('GET /1/asdfsbgqsdfe', function() {
  it('will respond with a message if the search term has no matches', function(done) {
    supertest('localhost:9999')
      .get('/1/asdfsbgqsdfe')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '31')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});