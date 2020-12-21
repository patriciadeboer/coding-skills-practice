const LongestWord = require('../lib/longest-word');
const { assert } = require('chai');

describe("Longest word", () => {
  it("should output first longest word if there is a tie", () => {
    assert.deepEqual(LongestWord("hello world"), 'hello');
  });
  it("should handle numbers", () => {
    assert.deepEqual(LongestWord("123456789 98765432"), '123456789');
  });
  it("should handle simple sentence", () => {
    assert.deepEqual(LongestWord("It is my birthday"), 'birthday');
  });
});
