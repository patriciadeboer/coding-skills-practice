const toWeirdCase = require('../lib/weird-string-case');
const { assert } = require('chai');

describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    var words = ['This', 'is', 'a', 'test',
      'Looks', 'like', 'you', 'passed'];
    for(var i=0; i<words.length; i++){
      assert.strictEqual(toWeirdCase(words[i]),
        words[i].toLowerCase().split(' ').map(function(word){
          return word.split('').map(function(char, index){
            return index%2==0 ? char.toUpperCase() : char;
          }).join('')
        }).join(' ') );
    }
    assert.strictEqual(toWeirdCase("This"),"ThIs")
    assert.strictEqual(toWeirdCase("AWESOME"),"AwEsOmE")
  });

  it('should return the correct value for multiple words', function(){
    var sentences = [
      'This is a test',
      'Looks like you passed',
      'This is the final test case',
      'Just kidding',
      'Ok fine you are done now'
    ];
    for(var i=0; i<sentences.length; i++){
      assert.strictEqual(toWeirdCase(sentences[i]),
        sentences[i].toLowerCase().split(' ').map(function(word){
          return word.split('').map(function(char, index){
            return index%2==0 ? char.toUpperCase() : char;
          }).join('')
        }).join(' ') );
    }
    assert.strictEqual(toWeirdCase("This is EXCITING"),"ThIs Is ExCiTiNg")
  });
});
