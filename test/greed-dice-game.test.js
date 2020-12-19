const score = require('../lib/greed-dice-game');
const { assert } = require('chai');


describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    assert.strictEqual( score( [2, 3, 4, 6, 2] ), 0,   "Should be 0 :-(" );
  });

  it( "should value these triplets correctly", function() {
    assert.strictEqual( score( [1, 1, 1, 3, 3] ), 1000, "Should be 1000" );
    assert.strictEqual( score( [2, 2, 2, 3, 3] ), 200, "Should be 200" );
    assert.strictEqual( score( [3, 3, 3, 3, 3] ), 300, "Should be 300" );
    assert.strictEqual( score( [4, 4, 4, 3, 3] ), 400, "Should be 400" );
    assert.strictEqual( score( [5, 5, 5, 3, 3] ), 500, "Should be 500" );
    assert.strictEqual( score( [6, 6, 6, 3, 3] ), 600, "Should be 600" );
  });

  it( "should value these mixed sets correctly", function() {
    assert.strictEqual( score( [1, 1, 1, 1, 3] ), 1100, "Should be 1100" );
    assert.strictEqual( score( [1, 1, 1, 1, 5] ),1150, "Should be 1150" );
    assert.strictEqual( score( [2, 4, 4, 5, 4] ),450, "Should be 450" );
    assert.strictEqual( score( [3, 4, 5, 3, 3] ),350, "Should be 350" );
    assert.strictEqual( score( [1, 5, 1, 3, 4] ), 250, "Should be 250" );
  });
});
