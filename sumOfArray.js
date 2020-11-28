// Time O(n)
// Space O(n)
const runningSum = (nums) => {
  let sum = 0;
  const output = [];
  nums.forEach(number => {
    sum += number;
    output.push(sum);
  })

  return output;
};

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
console.log(runningSum([1,2,3,4]));

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
console.log(runningSum([1,1,1,1,1]));

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
console.log(runningSum([3,1,2,10,1]));
