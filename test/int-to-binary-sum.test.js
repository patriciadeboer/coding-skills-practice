const countBits = require('../lib/int-to-binary-sum');
const { assert } = require('chai');

describe("Bit Counting", () => {
  it("Sum of binary adds up correctly", () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
    assert.strictEqual(countBits(26), 3);
    assert.strictEqual(countBits(77231418), 14);
    assert.strictEqual(countBits(12525589), 11);
    assert.strictEqual(countBits(3811), 8);
    assert.strictEqual(countBits(392902058), 17);
    assert.strictEqual(countBits(1044), 3);
    assert.strictEqual(countBits(10030245), 10);
    assert.strictEqual(countBits(183337941), 16);
    assert.strictEqual(countBits(20478766), 14);
    assert.strictEqual(countBits(103021), 9);
    assert.strictEqual(countBits(287), 6);
    assert.strictEqual(countBits(115370965), 15);
    assert.strictEqual(countBits(31), 5);
    assert.strictEqual(countBits(417862), 7);
    assert.strictEqual(countBits(626031), 12);
    assert.strictEqual(countBits(89), 4);
    assert.strictEqual(countBits(674259), 10);
  });
});
