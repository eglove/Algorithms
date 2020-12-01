// Time: O(n^2)
// Space: O(1)
const findTwoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length ; i++) {
    const numToFind = target - nums[i];
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] === numToFind) {
        return [i, j];
      }
    }
  }

  return null;
}

// Time: O(n)
// Space: O(n)
const findTwoSumOptimized = (nums, target) => {
  const map = new Map();
  for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return null;
}

const nums = [1, 3, 7, 9, 2];
const target = 11;
console.log(findTwoSumBruteForce(nums, target));
console.log(findTwoSumOptimized(nums, target));
