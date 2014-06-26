//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?
function uniqCharacters(str){
  var hash = {};
  function cb(preVal, currVal){
    if(!preVal){
      return false;
    }

    if(hash[currVal]){
      return false;
    }

    return hash[currVal] = true;
  }
  return Array.prototype.reduce.call(str, cb);
}

assertTrueFalse("uniqCharacters should work for a single character", true, uniqCharacters("abc" ));

function assertTrueFalse(testsDescription, expected, actual){
  var statement = actual + " SHOULD EQUAL " + expected + "\n";

  if(actual === expected){
    statement = "PASS \n" + statement;
  } else {
    statement = "FAIL \n" + statement;
  }

  statement = testsDescription + "\n" + statement;

  console.log(statement);

  return;
}
