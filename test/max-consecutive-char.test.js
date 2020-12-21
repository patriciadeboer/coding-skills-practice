const consecutiveChar = require('../lib/max-consecutive-char');
const { assert } = require('chai');

describe("Consecutive letters", () => {
  it("should output count and letter of max consecutive char in a given string", () => {
    assert.deepEqual(consecutiveChar('bbbaaaaccadd'), 'Max repeating char is a with count 4');
    assert.deepEqual(consecutiveChar('bbbaaaaccccccccccadcccdccccccccc'), 'Max repeating char is c with count 10');
  });
});
