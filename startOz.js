
// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only
// if it is 'z', so "ozymandias" yields "oz".
//
// startOz("ozymandias") → "oz"
// startOz("bzoo") → "z"
// startOz("oxx") → "o"

function startOz(str) {
	returnStr = '';
	firstChar = str.slice(0, 1);
	secondChar = str.slice(1, 2);

	if(!firstChar.localeCompare('o')) {
		returnStr += firstChar;
	}

	if(!secondChar.localeCompare('z')) {
		returnStr += secondChar;
	}

	return returnStr;
}

console.log(startOz("ozymandias"));
console.log(startOz("bzoo"));
console.log(startOz("oxx"));
