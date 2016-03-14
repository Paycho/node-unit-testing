var test = require('unit.js');
var jsdom = require('jsdom').jsdom;
var fs = require('fs');

var html = fs.readFileSync('tests/test.html', {encoding: "utf8"});
var cheerio = require('cheerio');
var createDiv = require('../lib/coollib.js')(cheerio.load(html));

describe('coollib test suite', function() {
  it('tests that a div is actually returned', function() {
    test
      .object(createDiv('test')[0])
        .contains({name: 'div'});
  });

  it('tests that the name is correctly piped through', function() {
    test
      .string(createDiv('test').html())
        .contains('test');
  });
});