const zigzagMatrix = require('../lib/zigzag-matrix');
const { assert } = require('chai');

describe("ZigZag the matrix", () => {
  it("should output a zigzag readout of an inputted matrix", () => {
    assert.deepEqual(zigzagMatrix([
      [1, 2, 3, 4,  5],
      [6, 7, 8, 9, 10],
      [11,12,13,14,15],
      [16,17,18,19,20],
    ]), [1,2,3,4,5,10,9,8,7,6,11,12,13,14,15,20,19,18,17,16]);
    assert.deepEqual(zigzagMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10,11,12,13,14,15],
      [16,17,18,19,20],
    ]), [1,2,3,4,9,8,7,6,5,10,11,12,13,14,15,20,19,18,17,16]);
  });
});
