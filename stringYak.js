
// Suppose the string "yak" is unlucky. Given a string, return a version where
// all the "yak" are removed, but the "a" can be any char. The "yak" strings
// will not overlap.

// stringYak("yakpak") → "pak"
// stringYak("pakyak") → "pak"
// stringYak("yak123ya") → "123ya"

function stringYak(str) {
	let newString = '';
	for(let i = 0; i < str.length; i += 3) {
		if(!(str.charAt(i) === 'y' && str.charAt(i+2) === 'k')) {
			newString += str.slice(i, i+3);
		}
	}
	return newString;
}

console.log(stringYak("yakpak"));
console.log(stringYak("pakyak"));
console.log(stringYak("yak123ya"));
