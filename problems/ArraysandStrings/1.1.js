//Implement an algorithm to determine if a string has all unique characters.
//What if you cannot use additional data structures?
function uniqCharacters(str){
  if(str.length > 256){
    return false;
  }
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
  return Array.prototype.reduce.apply(str, [cb, true]);
}


assertTrueFalse("uniqCharacters should work for a single character", true, uniqCharacters("abc" ));
assertTrueFalse("uniqCharacters should work for repeated characters", false, uniqCharacters("aabc" ));

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
