// Time O(n)
// Space O(1)
const kidsWithCandies = (candies, extraCandies) => {
  let greatest = 0;
  candies.forEach(candy => {
    if(candy > greatest) {
      greatest = candy;
    }
  })

  for(let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= greatest;
  }

  return candies;
};

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
let candies = [2,3,5,1,3];
console.log(kidsWithCandies(candies, 3));

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
candies = [4,2,1,1,2];
console.log(kidsWithCandies(candies, 1));

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
candies = [12,1,12];
console.log(kidsWithCandies(candies, 10));
