var helper = require('./test_helper'),
    sys = require("sys"),
    csv = require("../lib/csv");


helper.testCase("Parse Tests", {
  testParseSingleLine: function(test) {
    var parser = csv.parse("a,test,of,csv,parsing,for,me", function(data) {
      test.assertArrayEquals(["a", "test", "of", "csv", "parsing", "for", "me"], data);
    });
  },
  
  testParseMultiLine: function(test) {
    var count = 0;
    var parser = csv.parse("a,test,of,csv,parsing,for,me\na,test,of,csv,parsing,for,me", function(data) {
      count += 1
    });
    test.assertTrue(count == 2);
  },

  testParseComplexCSV: function(test) {
    var parser = csv.parse("a,\"test of the power\",234,3.1444", function(data) {
      test.assertArrayEquals(["a", "test of the power", 234, 3.1444], data);
    });
  }
});

