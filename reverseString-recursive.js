//Implement a function that reverses a string using recursion!

function recurseiveReverseString(str) {
	if (str === "") {
		return "";
	} else {
		return recurseiveReverseString(str.substr(1)) + str.charAt(0);
	}
}

console.log(recurseiveReverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
