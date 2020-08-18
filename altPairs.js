
// Given a string, return a string made of the chars at indexes
// 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"

function altPairs(str) {
	let newString = '';
	for(let i = 0; i < str.length; i += 4) {
		newString += str.charAt(i) + str.charAt(i+1);
	}
	return newString;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
