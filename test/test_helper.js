var test = require('mjsunit'),
    sys  = require('sys');

exports.testCase = function(caseName, tests) {
  var testCount = 0, passes = 0, fails = 0;
  
  function wrapAssertions(name) {
    var assertions = {};
    
    [
      'assertEquals',
      'assertArrayEquals',
      'assertTrue',
      'assertFalse',
      'assertNaN',
      'assertThrows',
      'AssertInstanceOf',
      'assertDoesNotThrow',
      'assertUnreachable'
    ].forEach(function(assert) {
      assertions[assert] = function() {
        testCount++;
        try {
          test[assert].apply(this, arguments);
          passes++;
        } catch(e) {
          sys.puts(name + ': ' + e);
          fails++;
        }
      }
    });
    
    return assertions;
  }
  
  
  for (var name in tests) {
    if (name.match(/^test/)) {
      tests[name](wrapAssertions(name));
    }
  }
  
  process.addListener('exit', function() {
    var passFail = (testCount == passes) ? ' \033[0;32mGOOD!\033[1;37m' : ' \033[0;31mBAD!\033[1;37m';
    sys.puts(caseName + " - Assertions: " + testCount + " Passed: " + passes + " Failed: " + fails + passFail);
  });
}
 
 
