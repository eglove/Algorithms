// Create a function that reverses a string:

// O(n)
function reverse(str) {
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'Invalid input';
	}

	let reverseString = '';
	for(let i = str.length - 1; i >= 0; i--) {
		reverseString += str.charAt(i);
	}

	return reverseString;
}

const reverse2 = str => str.split('').reverse().join('');
const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Mr. Owl ate my metal worm'));
console.log(reverse2('Do geese see God?'));
console.log(reverse2('Was it a car or a cat I saw?'));
console.log(reverse3('Murder for a jar of red rum'));
console.log(reverse3('Go hang a salami, I\'m a lasagna hog'));

