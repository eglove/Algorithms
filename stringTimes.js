
// Given a string and a non-negative int n, return a larger string that is
// n copies of the original string.

// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
	return str.repeat(n);
}

console.log(stringTimes("Hi", 2));
console.log(stringTimes("Hi", 3));
console.log(stringTimes("Hi", 1));
