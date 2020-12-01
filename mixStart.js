
// Return true if the given string begins with "mix", except the 'm' can be
// anything, so "pix", "9ix" .. all count.

// mixStart("mix snacks") → true
// mixStart("pix snacks") → true
// mixStart("piz snacks") → false

function mixStart(str) {
	return str.slice(1, 3).localeCompare('ix') === 0;
}

console.log(mixStart("mix snacks"))
console.log(mixStart("pix snacks"))
console.log(mixStart("piz snacks"))
