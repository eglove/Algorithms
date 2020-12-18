// O(n) Time - O(1) Space
function longestPeak(array) {
    let currentPeak = 0;
    let longestPeak = 0;

    for (let i = 1; i < array.length - 1; i++) {
        if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
            currentPeak += 3;
            let leftValley = i - 2;
            let rightValley = i + 2;

            while (array[leftValley] < array[leftValley + 1] && leftValley >= 0) {
                currentPeak++;
                leftValley--;
            }

            while (array[rightValley] < array[rightValley - 1] && rightValley < array.length) {
                currentPeak++;
                rightValley++;
            }

            // Jump i to right side
            i = rightValley - 1;
            longestPeak = Math.max(currentPeak, longestPeak);
            currentPeak = 0;
        }
    }

    return longestPeak;
}

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(array));