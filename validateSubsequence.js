// O(n) Time | O(1) Space
function isValidSubsequence(array, sequence) {
  let arrayPointer = 0;
  let sequencePointer = 0;

  if(sequence.length > array.length) {
    return false;
  }

  while(arrayPointer < array.length && sequencePointer < sequence.length) {
    if(array[arrayPointer] === sequence[sequencePointer]) {
      sequencePointer++;
    }

    arrayPointer++;
  }

  return sequencePointer === sequence.length;
}

let array = [5, 1, 22, 25, 6, -1, 8, 10]
let sequence = [1, 6, -1, 10]
// True
console.log(isValidSubsequence(array, sequence));

array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12];
// False
console.log(isValidSubsequence(array, sequence));

array = [5, 1, 22, 25, 6, -1, 8, 10];
sequence = [1, 6, -1, -1];
// False
console.log(isValidSubsequence(array, sequence));

