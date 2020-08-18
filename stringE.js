
// Return true if the given string contains between 1 and 3 'e' chars.

// stringE("Hello") → true
// stringE("Heelle") → true
// stringE("Heelele") → false

function stringE(str) {
	let numOfE = 0;

	for(let i = 0; i < str.length; i++) {
		if(str.charAt(i) === 'e') {
			numOfE++;
		}
	}

	return numOfE >= 1 && numOfE <= 3;
}

console.log(stringE("Hello"));
console.log(stringE("Heelle"));
console.log(stringE("Heelele"));
