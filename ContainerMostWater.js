// Time O(n^2)
// Space O(1)
const maxAreaBruteForce = (heights) => {
  let maxArea = Number.NEGATIVE_INFINITY;

  for(let i = 0; i < heights.length; i++) {
    for(let j = 0; j < heights.length; j++) {
      const height = Math.min(heights[i], heights[j]);
      const width = j - i;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

// O(n)
// O(1)
const maxArea = (heights) => {
  let i = 0, j = heights.length - 1, maxArea = Number.NEGATIVE_INFINITY;
  while(i < j) {
    const height = Math.min(heights[i], heights[j]);
    const width = j - i;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if(heights[i] <= heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
}

// Expects 49
const heights = [1,8,6,2,5,4,8,3,7];
// Expects 28
const heights2 = [7,1,2,3,9];

console.log(maxAreaBruteForce(heights));
console.log(maxAreaBruteForce(heights2));
console.log(maxArea(heights));
console.log(maxArea(heights2));
