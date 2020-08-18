// Given a non-empty string and an int n, return a new string where the char
// at index n has been removed. The value of n will be a valid index of a char
// in the original string (i.e. n will be in the range 0..str.length()-1
// inclusive).

// missingChar("kitten", 1) → "ktten"
// missingChar("kitten", 0) → "itten"
// missingChar("kitten", 4) → "kittn"

function missingChar(str, n) {
	str1 = str.slice(0, n);
	str2 = str.slice(n + 1, n.length);
	return str1 + str2;
}

console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));

