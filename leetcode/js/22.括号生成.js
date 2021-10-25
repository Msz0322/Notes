/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.25%)
 * Likes:    2105
 * Dislikes: 0
 * Total Accepted:    363K
 * Total Submissions: 469.9K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 有效括号组合需满足：左括号必须以正确的顺序闭合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n.length === 0) return []
  const result = []

  const run = (str, left, right) => {
    if (left === 0 && right === 0) {
      result.push(str)
      return
    }

    // 左右括号数量相同时，必须用左括号
    if (left === right) {
      run(str + '(', left - 1, right)
    } else {
      if (left > 0) {
        run(str + '(', left - 1, right)
      }

      run(str + ')', left, right - 1)
    }
  }

  run('', n, n)

  return result
};
// @lc code=end