
// Given an array of ints, return true if it contains a 2, 7, 1 pattern:
// a value, followed by the value plus 5, followed by the value minus 1.
// Additionally the 271 counts even if the "1" differs by 2 or less from the
// correct value.

// has271([1, 2, 7, 1]) → true
// has271([1, 2, 8, 1]) → false
// has271([2, 7, 1]) → true

function has271(nums) {
	let num1, num2, num3;
	for(let i = 0; i < nums.length; i++) {
		num1 = nums[i];
		num2 = nums[i+1];
		num3 = nums[i+2];
		if(num2 === num1 + 5 && (num3 >= num1 - 2 || num3 <= num1 + 2)) {
			return true;
		}
	}
	return false;
}

console.log(has271([1, 2, 7, 1]));
console.log(has271([1, 2, 8, 1]));
console.log(has271([2, 7, 1]));
