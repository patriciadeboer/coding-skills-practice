const arrayDiff = require('../lib/array-diff');
const { assert } = require('chai');

describe("Find the Array Difference", () => {
  it("Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
  });

  it("Random tests", function() {
    const array_diff_sol = (a, b) => a.filter(e => !b.includes(e));
    const generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let a, b, expected, aLength, bLength;
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array
    }
    for (let i = 0; i < 40; i++) {
      a = [];
      b = [];
      aLength = generateRandomInt(0,20);
      bLength = generateRandomInt(0,aLength);
      for (let j = 0; j < aLength; j++)
        a.push(generateRandomInt(0,40) - 20);
      b = shuffleArray(a).slice(0, generateRandomInt(0, aLength));
      expected = array_diff_sol(a,b);
      it("Testing for arrayDiff([" + a + "],[" + b + "])", function() {
        assert.deepEqual(arrayDiff(a,b), expected, "Should work for random arrays too");
      });
    }
  });

});
