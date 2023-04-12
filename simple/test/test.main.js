var assert = require('assert');
const app = require('../main.js')

describe('things for strings', function () {
  describe('reverse a string', function () {
    it('should return olleh', function () {
      assert.equal(app('hello', 'reverse'), 'olleh');
    });
  });
  describe('missing actions for strings', function (){
    it('should return -1 for missing actions', function () {
        assert.equal(app('hello', 'nonexistent'), -1);
      });
  })
});