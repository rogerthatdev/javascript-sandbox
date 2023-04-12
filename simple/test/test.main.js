var assert = require('assert');
const app = require('../main.js')
const arrays = require('../arrays.js')

describe('things for strings', function () {
  describe('reverse a string', function () {
    it('should return olleh', function () {
      assert.equal(app('hello', 'reverse'), 'olleh');
    });
  });
  describe('missing actions for strings', function (){
    it('should return -1 for missing string actions', function () {
        assert.equal(app('hello', 'nonexistent'), -1);
      });
  })
});

describe('things for arrays', function () {
    describe('tribonacci', function () {
      it('should return trib sequence', function () {
        assert.equal(arrays([1,1,1], 'trib', 10).toString(), [1,1,1,3,5,9,17,31,57,105].toString());
      });
    });
    describe('missing actions for arrays', function () {
      it('should return -1 for missing array actions', function () {
          assert.equal(arrays([], 'nonexistent'), -1);
        });
    });
});

