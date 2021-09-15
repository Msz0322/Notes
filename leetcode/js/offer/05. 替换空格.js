// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let index = 0
  let char = s[0]
  let result = ''

  while (char) {
    result += char === ' ' ? '%20' : char

    char = s[++index]
  }
  return result
};

const string = "We are happy."

// const res = string.replace(/\s/g, '%20')
const res = string.match(/\s/g, (...args) => {
  console.log(args)

  return 
})
let a = /\s/g
a.test()
// console.log('res: ', res);

