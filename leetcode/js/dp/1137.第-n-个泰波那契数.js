/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n

  let a
  let b = 0
  let c = 1
  let d = 1

  for (let i = 3; i <= n; i++) {
    a = b
    b = c
    c = d
    d = a + b + c
  }

  return d
};
// @lc code=end

console.log('tribonacci(10): ', tribonacci(10));