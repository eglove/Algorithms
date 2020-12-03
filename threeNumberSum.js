// O(n^2) Time | O(n) Space
const threeNumberSum = (array, targetSum) => {
  array = array.sort((a, b) => {return a - b});
  let currentSum = null;
  let resultArray = [];

  for(let i = 0; i < array.length; i++) {
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;
    while (leftPointer < rightPointer) {
      currentSum = array[i] + array[leftPointer] + array[rightPointer];

      if (currentSum < targetSum) {
        leftPointer++;
      } else if (currentSum > targetSum) {
        rightPointer--;
      } else if (currentSum === targetSum) {
        resultArray.push([array[i], array[leftPointer], array[rightPointer]]);
        leftPointer++;
        rightPointer--;
      }
    }
  }

  return resultArray;
}

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;
// [ [ -8, 2, 6 ], [ -8, 3, 5 ], [ -6, 1, 5 ] ]
console.log(threeNumberSum(array, targetSum));
