const arrayStringsAreEqual = (word1, word2) => {
  let word1Merged = '', word2Merged = '';
  word1.forEach(part => {
    word1Merged += part;
  })
  word2.forEach(part => {
    word2Merged += part;
  })

  return word1Merged === word2Merged;
};

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
console.log(arrayStringsAreEqual(["a", "cb"], ["a", "bc"]));

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
