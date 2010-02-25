var helper = require('./test_helper'),
    sys = require("sys"),
    csv = require("../lib/csv");


helper.testCase("Each Tests", {
  testParseMultiLine: function(test) {
    var count = 0;
    csv.each("basic_sample.csv").addListener("data", function(data) {
      count += 1;
    }).addListener("complete", function() {
      test.assertTrue(count == 1800);
    });
    
    
  }
});

