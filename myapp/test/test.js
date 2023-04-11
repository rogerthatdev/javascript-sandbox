var assert = require('assert');
const request = require('supertest');
const app = require('../app.js')
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('GET /', function() {
  it('return a 200 response', function(){
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type',/html/)
  })
})

describe('GET nonexistent', function() {
  it('return a 404 response', function(){
    return request(app)
      .get('/nonexistent')
      .expect(404)
      .expect('Content-Type',/html/)
  })
})