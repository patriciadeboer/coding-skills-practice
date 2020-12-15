const splitStrings = require('../lib/split-strings');
// const chai = require("chai");
// const assert = chai.assert;
const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(splitStrings("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(splitStrings("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(splitStrings(""), []);
  });

  it("Random tests", () => {
    function sol(str){
      var pairs = str.match(/.{1,2}/gi);
      if (pairs && pairs[pairs.length-1].length == 1){
        pairs[pairs.length-1] += '_';
      }
      return pairs || [];
    }
    for (let i = 0; i < 100; i++) {
      const s = Array(0 | Math.random() * 50 + 1).fill().map(() => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.random() * 52 | 0]).join``;
      assert.deepEqual(splitStrings(s), sol(s));
    }
  });
});
