// Time O(n)
// Space O(n)
const shuffle = (nums, n) => {
  let start = 0, pointer = 0;
  const returnArray = [];

  while (start !== nums.length - n) {
    returnArray.push(nums[pointer]);
    pointer += n;
    if(nums[pointer] === undefined) {
      start++;
      pointer = start;
    }
  }

  return returnArray;
};

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
let nums = [2,5,1,3,4,7];
console.log(shuffle(nums, 3));

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
nums = [1,2,3,4,4,3,2,1];
console.log(shuffle(nums, 4));

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]
nums = [1,1,2,2];
console.log(shuffle(nums, 2));
