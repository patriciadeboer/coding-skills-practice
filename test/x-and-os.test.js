const ExOh = require('../lib/x-and-os');
const { assert } = require('chai');

describe("Equal number of Xs and Os", () => {
  it("should return true if number of xs equals number of os", () => {
    assert.strictEqual(ExOh('xoxoxoxoxo'), true);
    assert.strictEqual(ExOh('xxxxxooo'), false);
  });
  it("should manage capital letters", () => {
    assert.strictEqual(ExOh('XXooXoXXOo'), true);
  });
});
