/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1

  const f = [0, 1]
  
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }

  return f[n]
};
// @lc code=end

// console.log('fib(2): ', fib(3));