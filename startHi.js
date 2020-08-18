
// Given a string, return true if the string starts with "hi" and false
// otherwise.

// startHi("hi there") → true
// startHi("hi") → true
// startHi("hello hi") → false

function startHi(str) {
	return str.slice(0,2).localeCompare('hi') === 0;
}

console.log(startHi("hi there"));
console.log(startHi("hi"));
console.log(startHi("hello hi"));
