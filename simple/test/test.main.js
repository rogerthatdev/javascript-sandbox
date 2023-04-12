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
        assert.equal(arrays([3,2,1], 'trib', 10).toString(), [3,2,1,6,9,16,31,56,103,190].toString());
      });
      it('should return [] for a param of 0', function () {
        assert.equal(arrays([3,2,1], 'trib', 0).toString(), [].toString());
      });
      it('should return first item for a param of 1', function () {
        assert.equal(arrays([3,2,1], 'trib', 1).toString(), [3].toString());
      });
      it('should return first 2 items for a param of 2', function () {
        assert.equal(arrays([3,2,1], 'trib', 2).toString(), [3,2].toString());
      });
    });
    describe('missing actions for arrays', function () {
      it('should return -1 for missing array actions', function () {
          assert.equal(arrays([], 'nonexistent'), -1);
        });
    });
});

