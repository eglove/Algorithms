
// Count the number of "xx" in the given string. We'll say that overlapping
// is allowed, so "xxx" contains 2 "xx".

// countXX("abcxx") → 1
// countXX("xxx") → 2
// countXX("xxxx") → 3

function countXX(str) {
	let occurances = 0;

	for(let i = 0; i < str.length - 1; i++) {
		if(str.slice(i, i+2).localeCompare('xx') === 0) {
			occurances++;
		}
	}

	return occurances;
}

console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
