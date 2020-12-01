
// Given 2 strings, a and b, return the number of the positions where they
// contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3,
// since the "xx", "aa", and "az" substrings appear in the same place in both
// strings.

// stringMatch("xxcaazz", "xxbaaz") → 3
// stringMatch("abc", "abc") → 2
// stringMatch("abc", "axc") → 0

function stringMatch(a, b) {
	const len = Math.min(a.length, b.length);
	let count = 0;

	for(let i = 0; i < len - 1; i++) {
		if(a.charAt(i) === b.charAt(i) && a.charAt(i+1) === b.charAt(i+1)) {
			count++;
		}
	}

	return count;
}

console.log(stringMatch("xxcaazz", "xxbaaz"));
console.log(stringMatch("abc", "abc"));
console.log(stringMatch("abc", "axc"));
