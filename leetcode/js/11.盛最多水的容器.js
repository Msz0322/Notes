/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height.length) return 0

  let l = 0
  let r = height.length - 1
  let max = 0

  const calcArea = (l, r) => Math.min(height[l], height[r]) * (r - l)

  while (l < r) {
    max = Math.max(max, calcArea(l, r))

    height[l] > height[r] ? r-- : l++
  }


  return max
};
// @lc code=end

// [1,8,6,2,5,4,8,3,7]