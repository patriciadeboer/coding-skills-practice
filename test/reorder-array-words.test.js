const order = require('../lib/reorder-array-words');
const { assert } = require('chai');

describe("Reorder words based on numbers in string", ()=>{
  it('should return the correct ordering for string of words', function(){
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6"), "wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor")
    assert.strictEqual(order(""), "", "empty input should return empty string" )
    assert.strictEqual(order("3 6 4 2 8 7 5 1 9"), "1 2 3 4 5 6 7 8 9")
  });
});
