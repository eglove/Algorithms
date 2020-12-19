// Traverse a two dimensional array in zigzag order.
// O(n) Time - O(n) Space
function zigzagTraverse(array) {
    const height = array.length - 1, width = array[0].length - 1;
    let direction = 'down';
    let currentRow = 0, currentCol = 0;
    const result = [];

    function isOutOfBounds() {
        return currentRow < 0 || currentRow > height || currentCol > width;
    }

    while (!isOutOfBounds()) {
        result.push(array[currentRow][currentCol]);
        if (direction === 'down') {
            if (currentCol === 0 || currentRow === height) {
                direction = 'up';
                if (currentRow === height) {
                    currentCol++;
                } else {
                    currentRow++;
                }
            } else {
                currentRow++;
                currentCol--;
            }
        } else if (direction === 'up') {
            if (currentRow === 0 || currentCol === width) {
                direction = 'down';
                if (currentCol === width) {
                    currentRow++;
                } else {
                    currentCol++;
                }
            } else {
                currentRow--;
                currentCol++;
            }
        }
    }

    return result;
}

let array = [
    [1, 3, 4, 10],
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16]
];
console.log(zigzagTraverse(array));