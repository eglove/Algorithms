
// Given a string, take the first 2 chars and return the string with the 2
// chars added at both the front and back, so "kitten" yields"kikittenki". If
// the string length is less than 2, use whatever chars are there.

// front22("kitten") → "kikittenki"
// front22("Ha") → "HaHaHa"
// front22("abc") → "ababcab"

function front22(str) {
	if(str.length < 2) {
		return str.repeat(3);
	}

	firstTwoChars = str.slice(0, 2);
	return firstTwoChars + str + firstTwoChars;
}

console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));
