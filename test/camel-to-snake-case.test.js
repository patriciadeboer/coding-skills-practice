const toUnderscore = require('../lib/camel-to-snake-case');
const toUnderscore2 = require('../lib/camel-to-snake-case');
const chai = require("chai");
const assert = chai.assert;

describe('Convert CamelCase to snake_case', ()=> {
  describe('basic tests', function() {
    it('should equals test_controller for string TestController', function() {
      assert.equal(toUnderscore('TestController'), 'test_controller')
      assert.equal(toUnderscore2('TestController'), 'test_controller')
    });

    it('should equals this_is_beautiful_day for string ThisIsBeautifulDay', function() {
      assert.equal(toUnderscore('ThisIsBeautifulDay'), 'this_is_beautiful_day')
      assert.equal(toUnderscore2('ThisIsBeautifulDay'), 'this_is_beautiful_day')
    });

  });

  describe('tests with numbers', function() {
    it('should equals am7_days for string Am7Days', function() {
      assert.equal(toUnderscore('Am7Days'), 'am7_days')
      assert.equal(toUnderscore2('Am7Days'), 'am7_days')
    });

    it('should equals my3_code_is4_times_better for string My3CodeIs4TimesBetter', function() {
      assert.equal(toUnderscore('My3CodeIs4TimesBetter'), 'my3_code_is4_times_better')
      assert.equal(toUnderscore2('My3CodeIs4TimesBetter'), 'my3_code_is4_times_better')
    });

    it("should equals '5' for 5", function() {
      assert.equal(toUnderscore(5), '5')
      assert.equal(toUnderscore2(5), '5')
    });
  });
});
