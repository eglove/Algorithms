// Time O(n^2)
// Space O(1)
const getTrappedRainwaterBruteForce = (heights) => {
  let totalWater = 0;
  for(let i = 0; i < heights.length; i++) {
    let leftI = i, rightI = i, maxLeft = 0, maxRight = 0;

    while(leftI >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftI]);
      leftI--;
    }

    while (rightI < heights.length) {
      maxRight = Math.max(maxRight, heights[rightI]);
      rightI++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[i];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
}

// Time: O(n)
// Space: O(1)
const getTrappedRainwater = (heights) => {
  let left = 0, right = heights.length - 1, leftMax = 0, rightMax = 0, total = 0;

  while(left < right) {
    if(heights[left] <= heights[right]) {
      if(heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
        total += leftMax - heights[left];
      }
      left++;
    } else {
      if(heights[right] >= rightMax) {
        rightMax = heights[right];
      } else {
        total += rightMax - heights[right];
      }
      right--;
    }
  }

  return total;
}

// Expects 8
const heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(getTrappedRainwaterBruteForce(heights));
console.log(getTrappedRainwater(heights));
