const flattenArray = require('../lib/multidimensional-array');
const { assert } = require('chai');

describe("Flatten the Multi-Dimensional Array", () => {
  it("should flatten nested array with a single depth", () => {
    assert.deepEqual(flattenArray([1,2,[3,4]]), [1,2,3,4]);
  });
  it("should flatten deeply nested arrays with multiple depths", () => {
    assert.deepEqual(flattenArray([[1, 2],[3, 4, [5, 6 ,[7, 8], 9]],[10 ,[11, 12]]]), [1,2,3,4,5,6,7,8,9,10,11,12]);
  });
});
