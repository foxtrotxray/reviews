const supertest = require('supertest');
const server = require('./server.js');
// describe('GET /9', function() {
//   it('responds with json', function(done) {
//     supertest(server)
//       .get('/9')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done)
//   });
// });
describe('GET /1', function() {
  it('responds with json', function(done) {
    supertest('localhost:9999')
      .get('/1')
      // .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
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
      .get('/1/1000')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});