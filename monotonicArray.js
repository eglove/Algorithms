// O(n) Time - O(1) Space
function isMonotonic(array) {
  let isIncreasing = true;
  let isDecreasing = true;

  for(let i = 0; i < array.length - 1; i++) {
    if(array[i] > array[i + 1]) {
      isDecreasing = false;
    }

    if(array[i] < array[i + 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

let array = [-1, -5, -10, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));

array = [-1, -5, -10, -1100, -900, -1101, -1102, -9001];
console.log(isMonotonic(array));
