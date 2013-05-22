var assert = require('assert'),
    csv = require("../index");

csv.parse("a,test,of,csv,parsing,for,me", function(data) {
  assert.equal(["a", "test", "of", "csv", "parsing", "for", "me"], data);
});
  
var count = 0;
csv.parse("a,test,of,csv,parsing,for,me\na,test,of,csv,parsing,for,me", function(data) {
  count++;
  count == 2 && assert.equal(count, 2);
});

csv.parse("a,\"test of the power\",234,3.1444", function(data) {
  assert.equal(["a", "test of the power", 234, 3.1444], data);
});
