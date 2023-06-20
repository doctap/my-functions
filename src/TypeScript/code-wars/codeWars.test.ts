import { assert, expect } from 'chai';
import { isHollow } from './codeWars';


describe("Hollow array", function () {
  it("Sample Tests", function () {
    assert.strictEqual(isHollow([-1, 0, 0, 0, 3]), true);
    assert.strictEqual(isHollow([1, 0, 0, 0, 0]), false);
    assert.strictEqual(isHollow([100, 0, 0, 3]), false);
    assert.strictEqual(isHollow([111, 100, 99, 0, 0, 0, 3, 5, 6]), true);
    assert.strictEqual(isHollow([0, 0, 0, 0, 0, 0, 0, 0, 0]), false);
    assert.strictEqual(isHollow([1, 0, 2, 0, 0, 0, 2, 0, 2]), false);
  });
})