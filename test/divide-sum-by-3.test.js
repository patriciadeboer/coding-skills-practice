const divisibleByThree = require('../lib/divide-sum-by-3');
const { assert } = require('chai');

describe('Basic Tests', function () {
  it('Basic tests:', () => {
    assert.strictEqual(
      divisibleByThree('123'),
      true,
      'Should return true if the sum of the given digits is divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('19254'),
      true,
      'Should return true if the sum of the given digits is divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('1'),
      false,
      'Should return false if the sum of the given digits is not divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('963210456'),
      true,
      'Should return true if the sum of the given digits is  divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('010110101011'),
      false,
      'Should return false if the sum of the given digits is not divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('9'),
      true,
      'Should return true if the sum of the given digits is  divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('6363'),
      true,
      'Should return true if the sum of the given digits is  divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('10987654321'),
      false,
      'Should return false if the sum of the given digits is not divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('9876543211234567890009'),
      true,
      'Should return true if the sum of the given digits is  divisible by 3.'
    );
    assert.strictEqual(
      divisibleByThree('9876543211234567890002'),
      false,
      'Should return false if the sum of the given digits is not divisible by 3.'
    );
  });
});
