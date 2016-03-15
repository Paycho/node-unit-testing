var test = require('unit.js');
var addTwoNumbers = require('../lib/simplelib.js');

describe("This is a test suite", function() {
  it("tests that two numbers are added right", function() {
    test
      .number(addTwoNumbers(3, 5))
      .is(8);
  });
});