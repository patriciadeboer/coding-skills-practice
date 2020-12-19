const scramble = require('../lib/scramblies');
const { assert } = require('chai');

describe('Fixed Tests', function(){
  it('should return the correct value for a single word', function(){
    assert.strictEqual(scramble('rkqodlw','world'),true);
    assert.strictEqual(scramble('cedewaraaossoqqyt','codewars'),true);
    assert.strictEqual(scramble('katas','steak'),false);
    assert.strictEqual(scramble('scriptjavx','javascript'),false);
    assert.strictEqual(scramble('scriptingjava','javascript'),true);
    assert.strictEqual(scramble('scriptsjava','javascripts'),true);
    assert.strictEqual(scramble('javscripts','javascript'),false);
    assert.strictEqual(scramble('aabbcamaomsccdd','commas'),true);
    assert.strictEqual(scramble('commas','commas'),true);
    assert.strictEqual(scramble('sammoc','commas'),true)
  });
});

describe('Random Tests', function () {

    var rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) }
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const char = function(){
      return alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    // var char = function () { return Test.sample('abcdefghijklmnopqrstuvwxyz') };

    function sol(str1, str2) {
      var map={};
      for(var c of str1) map[c]=map[c]+1||1;
      for(var c of str2) {
        if(!map[c]) return false;
        map[c]--;
      }
      return true;
    }
    var randomStr = function (length, exclude) {
        var arr = [],c;
        for (var i = 0; i <= length; i++){
          while((c = char()) == exclude){};
          arr.push(c);
        }
        return arr.join('');
    }
    it('Testing small strings', function () {
      for (let i=0; i<50; i++) {
          let s1 = randomStr(rand(0, 500));
          let s2 = randomStr(rand(0, 200));
          assert.strictEqual(scramble(s1, s2), sol(s1, s2));
      }
    });
    it('Testing very long strings', function () {
      for (let i=0; i<10; i++) {
          let p=Math.random()<0.5;
          let s1 = p ? randomStr(200000) : randomStr(200000,char());
          let s2 = p ? randomStr(200000) : randomStr(200000,char());
          assert.strictEqual(scramble(s1, s2), sol(s1, s2));
      }
    });
});
