// O(n) Time - O(n) Space
function largestRange(array) {
    let longestRange = [];
    let longestLength = 0;
    const nums = {};

    array.forEach(num => {
        nums[num] = true;
    })

    array.forEach((num, i) => {
        if (nums[num]) {
            let left = num - 1;
            let right = num + 1;
            let currentLength = 1;
            while (left in nums) {
                nums[left] = false;
                left--;
                currentLength++;
            }
            while (right in nums) {
                nums[right] = false;
                right++;
                currentLength++;
            }

            if (currentLength > longestLength) {
                longestLength = currentLength;
                currentLength = 0;
                longestRange = [left + 1, right - 1];
            }
        }
    })

    return longestRange;
}

// Expects [0, 7]
let array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
console.log(largestRange(array));

// Expects []
array = [1];
console.log(largestRange(array));

// Expects [10, 19]
array = [19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14];
console.log(largestRange(array));