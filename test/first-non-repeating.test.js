const firstNonRepeatingLetter = require('../lib/first-non-repeating');
const chai = require("chai");
const assert = chai.assert;

describe('First Non Repeating', ()=> {
  describe('Simple Tests', function() {
    it('should handle simple tests', function() {
      assert.strictEqual(firstNonRepeatingLetter('a'), 'a');
      assert.strictEqual(firstNonRepeatingLetter('stress'), 't');
      assert.strictEqual(firstNonRepeatingLetter('moonmen'), 'e');
    });
    it('should handle empty strings', function() {
      assert.strictEqual(firstNonRepeatingLetter(''), '');
    });
  });

  describe('Harder Tests', function() {
    it('should handle all repeating strings', function() {
      assert.strictEqual(firstNonRepeatingLetter('abba'), '');
      assert.strictEqual(firstNonRepeatingLetter('aa'), '');
    });
    it('should handle odd characters', function() {
      assert.strictEqual(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');
      assert.strictEqual(firstNonRepeatingLetter('hello world, eh?'), 'w');
    });
    it('should handle letter cases', function() {
      assert.strictEqual(firstNonRepeatingLetter('sTreSS'), 'T');
      assert.strictEqual(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!'), ',');
    });
  });
});
