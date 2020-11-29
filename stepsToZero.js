const numberOfSteps  = function(num) {
  let steps = 0;
  while(num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    steps++;
  }

  return steps;
};

// Input: num = 14
// Output: 6
console.log(numberOfSteps(14));

// Input: num = 8
// Output: 4
console.log(numberOfSteps(8));
