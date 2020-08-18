
// Given a string, return a version where all the "x" have been removed.
// Except an "x" at the very start or end should not be removed.

// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"

function stringX(str) {
	let newString = '';
	for(let i = 0; i < str.length; i++) {
		if(i === 0 || i === str.length -1) {
			newString += str.charAt(i);
		} else if(str.charAt(i) !== 'x') {
			newString += str.charAt(i);
		}
	}

	return newString;
}

console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
