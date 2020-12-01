// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// 	Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

let nums = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
	let zeroes = [];
	let others = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			zeroes.push(0);
		} else {
			others.push(nums[i]);
		}
	}

	return others.concat(zeroes);
}

console.log(moveZeroes(nums));
