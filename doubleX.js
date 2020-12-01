
// Given a string, return true if the first instance of "x" in the string is
// immediately followed by another "x".

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

function doubleX(str) {

	for (let i = 0; i < str.length - 1; i++) {
		if(str.charAt(i) === 'x' && str.charAt(i + 1) === 'x') {
			return true;
		}
	}

	return false;
}

console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
