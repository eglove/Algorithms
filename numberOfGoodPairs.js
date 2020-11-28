const numIdenticalPairs = (nums) => {
  let foundNumbers = { };
  let goodPairs = 0;
  nums.forEach(num => {
    if(!foundNumbers[num]) {
      foundNumbers[num] = 1;
    } else {
      goodPairs += foundNumbers[num];
      foundNumbers[num]++
    }
  })

  return goodPairs;
};

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Input: nums = [1,2,3,1,1,3]
// Output: 4
console.log(numIdenticalPairs([1,2,3,1,1,3]));

// Input: nums = [1,1,1,1]
// Output: 6
console.log(numIdenticalPairs([1,1,1,1]));

// Input: nums = [1,2,3]
// Output: 0
console.log(numIdenticalPairs([1,2,3]));
