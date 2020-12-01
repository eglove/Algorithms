// Given an array of ints, return true if one of the first 4 elements in the
// array is a 9. The array length may be less than 4.

// arrayFront9([1, 2, 9, 3, 4]) → true
// arrayFront9([1, 2, 3, 4, 9]) → false
// arrayFront9([1, 2, 3, 4, 5]) → false

function arrayFront9(nums) {
	let loopTo = nums.length;
	if (nums.length > 4) {
		loopTo = 4;
	}

	for (let i = 0; i < loopTo; i++) {
		if (nums[i] === 9) {
			return true;
		}
	}

	return false;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));
