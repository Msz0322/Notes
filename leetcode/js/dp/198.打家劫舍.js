/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums === null || nums.length === 0) return 0

  const length = nums.length

  if (length == 1) {
    return nums[0];
  }

  const dp = [0, nums[0]]

  for (let i = 2; i <= length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  console.log(dp)

  return dp[length]
};
// @lc code=end

console.log(rob([2, 1, 1, 2]));