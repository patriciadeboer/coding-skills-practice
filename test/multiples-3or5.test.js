const multiplesOfThreeOrFive = require('../lib/multiples-3or5');
const chai = require("chai");
const assert = chai.assert;

describe('Multiples of 3 or 5', ()=> {
  describe('Basic Tests', function() {
    it('should handle 10', function() {
      assert.strictEqual(multiplesOfThreeOrFive(10),23);
    });
    it('should handle 20', function() {
      assert.strictEqual(multiplesOfThreeOrFive(20),78);
    });
    it('should handle 200', function() {
      assert.strictEqual(multiplesOfThreeOrFive(200),9168);
    });
    it('should handle negative number', function() {
      assert.strictEqual(multiplesOfThreeOrFive(-10),0);
    });
  });
  describe('Smallest Cases', function() {
    it('should handle values below 3 or 5 or smallest case', function() {
      assert.strictEqual(multiplesOfThreeOrFive(-1),0);
      assert.strictEqual(multiplesOfThreeOrFive(0),0);
      assert.strictEqual(multiplesOfThreeOrFive(1),0);
      assert.strictEqual(multiplesOfThreeOrFive(2),0);
      assert.strictEqual(multiplesOfThreeOrFive(3),0);
      assert.strictEqual(multiplesOfThreeOrFive(4),3);
      assert.strictEqual(multiplesOfThreeOrFive(5),3);
      assert.strictEqual(multiplesOfThreeOrFive(6),8);
    });
  });

});
