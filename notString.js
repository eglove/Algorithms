// Given a string, return a new string where "not " has been added to the
// front. However, if the string already begins with "not", return the string
// unchanged. Note: use .equals() to compare 2 strings.

// notString("candy") → "not candy"
// notString("x") → "not x"
// notString("not bad") → "not bad"

function notString(str) {
	const checkFor = 'not';

	if(!str.substr(0, 3).localeCompare(checkFor)) {
		return str;
	} else {
		return `${checkFor} ${str}`;
	}
}

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
