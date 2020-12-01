// O(n) Time | O(n) Space
const twoNumberSum = (array, targetSum) => {
  const foundNumbers = new Set();
  let foundPair = [];
  array.forEach(num => {
    const numComplement = targetSum - num;
    if(foundNumbers.has(numComplement)) {
      foundPair = [num, numComplement];
    } else {
      foundNumbers.add(num);
    }
  })

  return foundPair;
}

// O(nlogn) | O(1)
const twoNumberSumSpaceOptimized = (array, targetSum) => {
  // nlog(n)
  array = array.sort((a, b) => {return a - b});
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let foundPair = [];

  while(leftPointer < rightPointer) {
    const currentSum = array[leftPointer] + array[rightPointer];
    if(currentSum === targetSum) {
      foundPair = [array[leftPointer], array[rightPointer]]
      break;
    } else if(currentSum < targetSum) {
      leftPointer++;
    } else if(currentSum > targetSum) {
      rightPointer--;
    }
  }

  return foundPair;
}

let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10;
// Return [-1, 11]
console.log(twoNumberSum(array, targetSum));
console.log(twoNumberSumSpaceOptimized(array, targetSum));

array = [];
targetSum = 20;
// Return []
console.log(twoNumberSum(array, targetSum));
console.log(twoNumberSumSpaceOptimized(array, targetSum));
