/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = Object.create(null);

  nums.forEach(num => {
    if (!map[num]) map[num] = 0

    map[num]++
  })

  const result = []
  Object.keys(map).forEach(num => {
    if (map[num] > Math.floor(nums.length / 3)) {
      result.push(num)
    }
  })

  return result

  // 摩尔投票法
};
// @lc code=end

console.log(majorityElement([3, 2, 3]))