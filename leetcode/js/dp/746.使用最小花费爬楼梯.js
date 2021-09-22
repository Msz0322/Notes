/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length < 2) return 0
  let arr = [cost[0], cost[1]]


  for (let i = 2; i <= cost.length ; i++) {
    arr[i] = (cost[i] || 0) + Math.min(arr[i - 1], arr[i - 2])
  }

  return arr[arr.length - 1]
};
// var minCostClimbingStairs = function (cost) {
//   const n = cost.length;
//   const dp = new Array(n + 1);
//   dp[0] = dp[1] = 0;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }
//   
//   return dp[n];
// };
// @lc code=end


