const vowelIndices = require('../lib/vowel-index');
const chai = require("chai");
const assert = chai.assert;

describe('Vowel Index', ()=> {
  describe('Simple Tests', function() {
    it('should handle simple tests', function() {
      assert.deepEqual(vowelIndices("mmm"), []);
      assert.deepEqual(vowelIndices("apple"), [1,5]);
      assert.deepEqual(vowelIndices("super"), [2,4]);
      assert.deepEqual(vowelIndices("orange"), [1,3,6]);
      assert.deepEqual(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]);
    });
  });
});
