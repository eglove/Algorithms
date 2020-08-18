// Given 2 arrays, create a function that let's a user know
// (true/false whether these two arrays contain any common items.

// Convert a1 to object, loop through comparing array to compare properties

const a1 = ['a', 'b', 'c', 'x'];
// (a1, a2) = false
const a2 = ['z', 'y', 'i'];
// (a1, a3) = true
const a3 = ['z', 'y', 'x'];
// (a1, a4) = false
const a4 = [];

let map = {};

function mapArrayToObject(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (!map[arr[i]]) {
			const item = arr[i];
			map[item] = true;
		}
	}
}

function searchObjectForCommonItem(array) {
	for (let i = 0; i < array.length; i++) {
		if (map[array[i]]) {
			return true;
		}
	}
	return false;
}

// Time Complexity: O(n), Space Complexity: O(n)
function containsCommonItems(arr1, arr2) {
	mapArrayToObject(arr1);
	return searchObjectForCommonItem(arr2);
}

// Time Complexity: O(n), Space Complexity: O(1)
function containsCommonItems2(arr1, arr2) {
	return arr1.some(item => arr2.includes(item));
}

console.log('First Method:');
console.log(containsCommonItems(a1, a2));
console.log(containsCommonItems(a1, a3));
console.log(containsCommonItems(a1, a4));
console.log('Second Method:');
console.log(containsCommonItems2(a1, a2));
console.log(containsCommonItems2(a1, a3));
console.log(containsCommonItems2(a1, a4));
