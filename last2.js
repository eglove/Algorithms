
// Given a string, return the count of the number of times that a substring
// length 2 appears in the string and also as the last 2 chars of the string,
// so "hixxxhi" yields 1 (we won't count the end substring).

// last2("hixxhi") → 1
// last2("xaxxaxaxx") → 1
// last2("axxxaaxx") → 2

function last2(str) {
	lastTwoChars = str.slice(str.length - 2, str.length);
	let occurances = 0;

	for(let i = 0; i < str.length - 2; i++) {
		if(str.slice(i, i+2) === lastTwoChars) {
			occurances++;
		}
	}

	return occurances;
}

console.log(last2('hixxhi'));
console.log(last2('xaxxaxaxx'));
console.log(last2('axxxaaxx'));
