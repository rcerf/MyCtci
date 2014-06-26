//Given two strings, write a method to decide if one is a permutation of the other.

function stringPermutation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  var hash = {};

  function buildHash(currVal){
    if(hash[currVal]){
      hash[currVal]++;
    } else {
      hash[currVal] = 1;
    }
  }

  function checkHash(preVal, currVal){
    if(hash[currVal]){
      hash[currVal]--;
      return true;
    } else {
      return false;
    }
  }

  Array.prototype.forEach.call(str1.toLowerCase(), buildHash);

  return Array.prototype.reduce.apply(str2.toLowerCase(), [checkHash, true]);
}

assertTrue(true, stringPermutation("ckiR", "Rick"));
assertTrue(false, stringPermutation("yckiR", "Rick"));
assertTrue(false, stringPermutation("ckiR", "Cerf"));

function assertTrue(expected, actual){
  var statement = actual + " SHOULD EQUAL " + expected + "\n";
  if(expected === actual){
    statement = "PASS\n" + statement;
  }else {
    statement = "FAIL\n" + statement;
  }
  console.log(statement);
}
