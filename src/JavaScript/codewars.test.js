const { assert } = require("chai");
const { findHack } = require('./codewars');

const getArray = () => [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A", "A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
];

describe('removeZeros', () => {
    it("test", () => {
        assert.equal(findHack(getArray()), ["name2", "name4"]);
    });
});
