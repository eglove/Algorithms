const restoreString = function(s, indices) {
  let newString = new Array(s.length);
  for(let i = 0; i < indices.length; i++) {
    newString[indices[i]] = s.charAt(i)
  }

  return newString.join('');
};

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))

// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
console.log(restoreString('abc', [0,1,2]))

// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"
console.log(restoreString('aiohn', [3,1,4,2,0]))

// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"
console.log(restoreString('aaiougrt', [4,0,2,6,7,3,1,5]))

// Input: s = "art", indices = [1,0,2]
// Output: "rat"
console.log(restoreString('art', [1,0,2]))
