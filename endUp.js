
// Given a string, return a new string where the last 3 chars are now in upper
// case. If the string has less than 3 chars, uppercase whatever is there.
// Note that str.toUpperCase() returns the uppercase version of a string.

// endUp("Hello") → "HeLLO"
// endUp("hi there") → "hi thERE"
// endUp("hi") → "HI"

function endUp(str) {
	if(str.length < 3) {
		return str.toUpperCase();
	}

	return str.slice(0, str.length - 3) + str.slice(str.length - 3, str.length).toUpperCase();
}

console.log(endUp("Hello"));
console.log(endUp("hi there"));
console.log(endUp("hi"));
