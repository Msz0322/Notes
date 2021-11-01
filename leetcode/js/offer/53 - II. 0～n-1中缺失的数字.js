/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0,
    j = nums.length;

  while (i <= j) {
    const mid = Math.floor((j + i) / 2)
    if (nums[mid] === mid) {
      i = mid + 1
    } else {
      j = mid - 1
    }
  }

  return i
};