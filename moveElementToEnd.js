// O(n) Time | O(1) Space
const moveElementToEnd = (array, toMove) => {
  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer < rightPointer) {
    if (array[leftPointer] === toMove && array[rightPointer] !== toMove) {
      const temp = array[leftPointer]
      array[leftPointer] = array[rightPointer]
      array[rightPointer] = temp
    }

    if (array[leftPointer] !== toMove) {
      leftPointer++
    }

    if (array[rightPointer] === toMove) {
      rightPointer--
    }
  }

  return array
}

let array = [2, 1, 2, 2, 2, 3, 4, 2]
let toMove = 2
console.log(moveElementToEnd(array, toMove))
