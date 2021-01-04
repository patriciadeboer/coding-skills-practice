const Palindrome = require('../lib/palindrome');
const { assert } = require('chai');

describe("Is this a palindrome?", () => {
  it("should return true if string is a palindrome", () => {
    assert.strictEqual(Palindrome('eye'), true);
    assert.strictEqual(Palindrome('hello there'), false);
  });
  it("should manage capital letters and spaces", () => {
    assert.strictEqual(Palindrome('RacEcAr raceCAR'), true);
    assert.strictEqual(Palindrome('Hello There'), false);
  });
});
