const numJewelsInStones = function(J, S) {
  let stoneJewelCount = 0;

  for(let i = 0; i < S.length; i++) {
      if(J.includes(S.charAt(i))) {
        stoneJewelCount++;
      }
  }

  return stoneJewelCount;
};

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
console.log(numJewelsInStones("aA", "aAAbbbb"))

// Input: J = "z", S = "ZZ"
// Output: 0
console.log(numJewelsInStones("z", "ZZ"))
