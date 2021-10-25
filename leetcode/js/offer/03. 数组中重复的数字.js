/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = Object.create(null)
  let result
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      result = nums[i]
      break
    }
    map[nums[i]] = 1
  }

  return result
};