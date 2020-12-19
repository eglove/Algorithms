// O(n) Time - O(1) Space
function subarraySort(array) {
    let subArrayFound = false;
    let smallestInSubarray = Infinity;
    let largestInSubarray = -Infinity;
    let indexLeft = 0, indexRight = array.length - 1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1] || array[i] < array[i - 1]) {
            smallestInSubarray = Math.min(smallestInSubarray, array[i]);
            largestInSubarray = Math.max(largestInSubarray, array[i]);
            subArrayFound = true;
        }
    }

    if (!subArrayFound) {
        return [-1, -1];
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] > smallestInSubarray) {
            indexLeft = i;
            break;
        }
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < largestInSubarray) {
            indexRight = i;
            break;
        }
    }

    return [indexLeft, indexRight];
}

let array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
console.log(subarraySort(array));

array = [-1, -1];
console.log(subarraySort(array));

array = [2, 1];
console.log(subarraySort(array));