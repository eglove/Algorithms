const subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;
  n = n.toString();

  for(let i = 0; i < n.length; i++) {
    product *= parseInt(n.charAt(i));
    sum += parseInt(n.charAt(i));
  }

  return product - sum;
};

// Input: n = 234
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
console.log(subtractProductAndSum(234));

// Input: n = 4421
// Output: 21
// Explanation:
// Product of digits = 4 * 4 * 2 * 1 = 32
// Sum of digits = 4 + 4 + 2 + 1 = 11
// Result = 32 - 11 = 21
console.log(subtractProductAndSum(4421));
