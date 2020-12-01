
// Given a string, return a new string where the first and last chars have
// been exchanged.

// frontBack("code") → "eodc"
// frontBack("a") → "a"
// frontBack("ab") → "ba"

function frontBack(str) {
	if(str.length < 2) {
		return str;
	}

	const front = str.slice(0, 1);
	const middle = str.slice(1, str.length - 1);
	const back = str.slice(str.length - 1, str.length);

	return back + middle + front;
}

console.log(frontBack("code"));
console.log(frontBack("a"));
console.log(frontBack("ab"));
