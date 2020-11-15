const string1 = "ab#z"
const string2 = "az#z"

// Time O(n)
// Space O(1)
const buildString = (string) => {
  const builtArray = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== '#') {
      builtArray.push(string[i]);
    } else {
      builtArray.pop();
    }
  }
  return builtArray;
}

// Time O(a + b)
// Space O(a + b)
const backspaceCompareBruteForce = (string1, string2) => {
  string1 = buildString(string1); // O(a)
  string2 = buildString(string2); // O(b)

  if(string1.length !== string2.length) {
    return false;
  } else {
    for(let i = 0; i < string1.length; i++) {
      if(string1[i] !== string2[i]) {
        return false;
      }
    }
  }

  return true;
}

// Time O(a + b)
// Space O(1)
const backspaceCompare = (string1, string2) => {
  let string1Char = string1.length - 1, string2Char = string2.length - 1;

  while(string1Char >= 0 || string2Char >= 0) {
    // Reposition pointer if character is # so as to not compare it
    if(string1[string1Char] === '#' || string2[string2Char] === '#') {
      if(string1[string1Char] === '#') {
        let backCount = 2; // "Backspace" # and character before it (move pointer two spaces)
        while(backCount > 0) {
          string1Char--;
          backCount--;
          if(string1[string1Char] === '#') { // Increase backCount if another # is found
            backCount = backCount + 2;
          }
        }
      }

      if(string2[string2Char] === '#') {
        let backCount = 2;
        while(backCount > 0) {
          string2Char--;
          backCount--;
          if(string2[string2Char] === '#') {
            backCount = backCount + 2;
          }
        }
      }
    } else { // check if characters are pointers are equal
      if(string1[string1Char] !== string2[string2Char]) {
        return false;
      } else {
        string1Char--;
        string2Char--;
      }
    }
  }

  return  true;
}

// Expected true
console.log(backspaceCompareBruteForce(string1, string2))
console.log(backspaceCompare(string1, string2))
