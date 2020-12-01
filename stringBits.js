
// Given a string, return a new string made of every other char starting with
// the first, so "Hello" yields "Hlo".

// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

function stringBits(str) {
	let newString = '';
	for(let i = 0; i < str.length; i += 2) {
		newString += str.charAt(i);
	}
	return newString;
}

console.log(stringBits("Hello"));
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
