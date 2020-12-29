const dashInsert = require('../lib/dash-insert');
const { assert } = require('chai');

describe("Insert dash between 2 odd numbers in a given string", ()=>{
  it('should return the correct ordering for string of words', function(){
    assert.strictEqual(dashInsert("454793"), "4547-9-3")
    assert.strictEqual(dashInsert("444444"), "444444")
    assert.strictEqual(dashInsert("33333333"), "3-3-3-3-3-3-3-3")
    assert.strictEqual(dashInsert("8867899965455"), "886789-9-96545-5")
  });
});
