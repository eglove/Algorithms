// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// 	You may assume that each input would have exactly one solution, and you may not use the same element twice.

// 	Example:
// Given nums = [2, 7, 11, 15], target = 9,
// 	Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
let target = 9;
let nums = [2, 7, 11, 15];

function twoSums(target, nums) {
	let map = new Map();
	let complement = nums[0];

	for (let i = 0; i < nums.length; i++) {
		if(map.has(complement)) {
			return (`${complement} ${nums[i]}`);
		}
		map.set(nums[i], i);
	}
	return false;
}

console.log(twoSums(target, nums));
