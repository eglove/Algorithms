
// Given a string, if the string "del" appears starting at index 1, return a
// string where that "del" has been deleted. Otherwise, return the string
// unchanged.

// delDel("adelbc") → "abc"
// delDel("adelHello") → "aHello"
// delDel("adedbc") → "adedbc"

function delDel(str) {
	if(str.slice(1, 4).localeCompare('del') === 0) {
		return str.slice(0, 1) + str.slice(4, str.length);
	}

	return str;
}

console.log(delDel("adelbc"))
console.log(delDel("adelHello"))
console.log(delDel("adedbc"))
