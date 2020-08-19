const closestMultiple10 = require('../lib/closest-multiple-ten');
const chai = require("chai");
const assert = chai.assert;

describe('Closest Multiple of 10', ()=> {
  describe('initial tests', function() {
    it('should return 10 for numbers from 10 to 14', function() {
      for (let i = 10; i <= 14; ++i) {
        assert.strictEqual(closestMultiple10(i), 10);
      }
    });

    it('should return 20 for numbers from 15 to 20', function() {
      for (let i = 15; i <= 20; ++i) {
        assert.strictEqual(closestMultiple10(i), 20);
      }
    });
  });

  describe('random tests', function() {
    const solution = num => Math.round(num / 10) * 10;
    it('should show correct result', function() {
      for (let i = 1337; i < 13337; i += 333 + (Math.random() * 10)) {
        assert.strictEqual(closestMultiple10(i), solution(i));
      }
    });
  });
});
