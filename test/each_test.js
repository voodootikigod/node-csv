var assert = require('assert'),å
    csv = require("../index");

var count = 0;
csv.each(__dirname + '/basic_sample.csv').on("data", function(data) {
  count += 1;
}).on("complete", function() {
  assert.equal(count, 1800);
});
