
// Given a non-empty string like "Code" return a string like "CCoCodCode".

// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

function stringSplosion(str) {
	let newString = '';
	for(let i = 0; i <= str.length; i++) {
		newString += str.slice(0, i);
	}
	return newString;
}

console.log(stringSplosion("Code"));
console.log(stringSplosion("abc"));
console.log(stringSplosion("ab"));
