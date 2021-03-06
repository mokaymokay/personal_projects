const assert = require('assert')
const twoSumIndex = require('../two-sum-index')

describe('Two sum index', function() {
  describe('Testing for input [1,2,3] and 4', function() {
    it('should return [0,2]', function() {
      actual = twoSumIndex([1,2,3], 4)
      expected = [0, 2]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for input [1234, 5678, 9012] and 14690', function () {
    it('should return [1,2]', function () {
      actual = twoSumIndex([1234, 5678, 9012], 14690)
      expected = [1, 2]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for input [1,2,3] and 4', function () {
    it('should return [0,1]', function () {
      actual = twoSumIndex([2, 2, 3], 4)
      expected = [0, 1]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for input [5,2,0,8] and 13', function () {
    it('should return [0,3]', function () {
      actual = twoSumIndex([5, 2, 0, 8], 13)
      expected = [0, 3]
      assert.deepEqual(actual, expected)
    })
  })

  describe('Testing for input [746, 687, 331, 217, 20, 564, 200, 578, 217, 948] and 781', function () {
    it('should return [3,5]', function () {
      actual = twoSumIndex([746, 687, 331, 217, 20, 564, 200, 578, 217, 948], 781)
      expected = [3, 5]
      assert.deepEqual(actual, expected)
    })
  })
})