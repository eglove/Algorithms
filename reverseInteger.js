// Time O(n)
// Space O(n)
const reverse = (x) => {
  let reversed = '';

  if(x.toString().charAt(0) === '-') {
    reversed += '-';
  }

  for(let i = x.toString().length - 1; i >= 0; i--) {
    if(x.toString().charAt(i) !== '-') {
      reversed += x.toString().charAt(i);
    }
  }

  if(reversed.length > 1 && reversed.charAt(0) === '0') {
    reversed = reversed.substr(1);
  }

  if(reversed <= Math.pow(-2, 31) || reversed >= Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return reversed;
  }
}

// Time O(n)
// Space O(1)
const reverseOptimized = (x) => {
  let reversed = 0;
  while (x !== 0) {
    let pop = x % 10;
    x = Math.sign(x) * Math.floor(Math.abs(x) / 10);

    reversed = reversed * 10 + pop;

    if(reversed >= Math.pow(2, 31) - 1 || reversed <= Math.pow(-2, 31)) {
      return 0;
    }
  }

  return reversed;
}

// Input: x = 123
// Output: 321
console.log(reverse(123));
console.log(reverseOptimized(123));

// Input: x = -123
// Output: -321
console.log(reverse(-123));
console.log(reverseOptimized(-123));

// Input: x = 120
// Output: 21
console.log(reverse(120));
console.log(reverseOptimized(120));

// Input: x = 0
// Output: 0
console.log(reverse(0));
console.log(reverseOptimized(0));

// Input: x = 1534236469
// Output: 0
console.log(reverse(1534236469));
console.log(reverseOptimized(1534236469));
