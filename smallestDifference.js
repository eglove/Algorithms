// O(nlog(n) + mlog(m)) Time | O(1) Space
const smallestDifference = (arrayOne, arrayTwo) => {
  arrayOne = arrayOne.sort((a, b) => {return a - b})
  arrayTwo = arrayTwo.sort((a, b) => {return a - b})

  let arrayOnePointer = 0
  let arrayTwoPointer = 0
  let currentSmallestSum = Infinity
  let currentPair = []

  while (arrayOnePointer < arrayOne.length && arrayTwoPointer < arrayTwo.length) {
    let bigger = Math.max(arrayOne[arrayOnePointer], arrayTwo[arrayTwoPointer])
    let smaller = Math.min(arrayOne[arrayOnePointer], arrayTwo[arrayTwoPointer])

    if (bigger - smaller === 0) {
      return [arrayOne[arrayOnePointer], arrayTwo[arrayTwoPointer]]
    }

    if(bigger - smaller < currentSmallestSum) {
      currentSmallestSum = bigger - smaller;
      currentPair = [arrayOne[arrayOnePointer], arrayTwo[arrayTwoPointer]]
    }

    if(arrayOne[arrayOnePointer] < arrayTwo[arrayTwoPointer]) {
      arrayOnePointer++;
    } else {
      arrayTwoPointer++;
    }
  }

  return currentPair;
}

let arrayOne = [-1, 5, 10, 20, 28, 3]
let arrayTwo = [26, 134, 135, 15, 17]
// 28, 26
console.log(smallestDifference(arrayOne, arrayTwo))

arrayOne = [10, 0, 20, 25]
arrayTwo = [1005, 1006, 1014, 1032, 1031]
// 25, 1005
console.log(smallestDifference(arrayOne, arrayTwo))
