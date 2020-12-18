// O(n) - Time, O(n) - Space
function spiralTraverse (array) {
  let results = []
  let startRow = 0, endRow = array.length - 1
  let startCol = 0, endCol = array[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    // Top border
    for (let col = startCol; col <= endCol; col++) {
      results.push(array[startRow][col])
    }

    // Right border
    for (let row = startRow + 1; row <= endRow; row++) {
      results.push(array[row][endCol])
    }

    // Bottom border
    for (let col = endCol - 1; col >= startCol; col--) {
      if(startRow === endRow) break;
      results.push(array[endRow][col])
    }

    // Left border
    for (let row = endRow - 1; row > startRow; row--) {
      if(startCol === endCol) break;
      results.push(array[row][startCol])
    }

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return results
}

let matrix = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
]
console.log(spiralTraverse(matrix))

matrix = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6]
]
console.log(spiralTraverse(matrix))

matrix = [
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6]
]
console.log(spiralTraverse(matrix))
