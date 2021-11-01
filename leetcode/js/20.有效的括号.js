/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 从里面消
  // let string = s

  // for (let i = 0; i < s.length / 2; i++) {
  //   string = string.replace(/(\{\}|\[\]|\(\))/, '')
  // }

  // return !string.length

  const rightToLeft = {
    '}': '{',
    ']': '[',
    ')': '(',
  }

  // 用栈做
  const stack = []

  for (let i = 0; i < s.length; i++) {
    // 碰到和前一个相同的，就抵消
    const char = s[i]
    if (i === 0) {
      stack.push(char)
      continue
    }

    if (stack.length && rightToLeft[char] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return !stack.length
};
// @lc code=end

console.log(isValid("()[]{}"))