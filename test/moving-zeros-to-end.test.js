const moveZeros = require('../lib/moving-zeros-to-end');
const chai = require("chai");
const assert = chai.assert;

describe('Move Zeros to the End', ()=> {
  describe('Tests', function() {
    it('should handle array of numbers', function() {
      assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]);
    });
    it('should handle array with decimal numbers', function() {
      assert.deepEqual(moveZeros([9,0.0,0,9,1,2,0,1,0,1,0.0,3,0,1,9,0,0,0,0,9]),[9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0] );
    });
    it('should handle array with numbers and characters', function() {
      assert.deepEqual(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]),["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0] );
    });
    it('should handle array with numbers, characters, null, and booleans', function() {
      assert.deepEqual(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]),["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0] );
    });
  });

});
