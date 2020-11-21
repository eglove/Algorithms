// Time O(nlogn)
// Space O(n)
const findMedianSortedArrays = (nums1, nums2) => {
  let merged = nums1.concat(nums2)
  merged.sort((a, b) => a - b)

  switch (merged.length) {
    case 0:
      return 0
    case 1:
      return merged[0]
    case 2:
      return (merged[0] + merged[1]) / 2
  }

  if (merged.length % 2 === 0) {
    return (merged[merged.length / 2] + merged[(merged.length / 2) - 1]) / 2
  } else {
    return merged[Math.floor(merged.length / 2)]
  }
}

let nums1 = [1, 3]
let nums2 = [2]
// Output: 2.00000
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [1, 2]
nums2 = [3, 4]
// Output: 2.50000
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [0, 0]
nums2 = [0, 0]
// Output: 0.00000
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = []
nums2 = [1]
// Output: 1.00000
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [2]
nums2 = []
// Output: 2.00000
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = []
nums2 = [1, 2, 3, 4]
// Output: 2.5
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [100001]
nums2 = [100000]
// Output: 100000.5
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [2, 3]
nums2 = [1]
// Output: 2
console.log(findMedianSortedArrays(nums1, nums2))


nums1 = [0]
nums2 = []
// Output: 0
console.log(findMedianSortedArrays(nums1, nums2))

nums1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
nums2 = [0,6]
// Output: 10.5
console.log(findMedianSortedArrays(nums1, nums2))

