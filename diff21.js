// Given an int n, return the absolute difference between n and 21, except
// return double the absolute difference if n is over 21.

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0

function diff21(n) {
	diff = 21 - n;

	if(n > 21) return Math.abs(diff * 2);

	return diff;
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
console.log(diff21(22));
