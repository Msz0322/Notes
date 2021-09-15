// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const result = []
  const end = Number(new Array(n).fill('9').join(''))

  for (let i = 1; i <= end; i++) {
    result.push(i)
  }

  return result
};