/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // bad [0,1,1,2]
  // const sortedNums = nums.sort((a, b) => a - b)

  // let max = 0
  // let count = 0
  // for (let i = 0; i < sortedNums.length; i++) {
  //   count += 1
  //   max = Math.max(max, count)
  //   if ((sortedNums[i] + 1) !== sortedNums[i + 1]) count = 0
  // }

  // 创建hashmap
  const map = new Set()
  for (const num of nums) {
    map.add(num)
  }

  let max = 0
  for (const num of map) {
    if (map.has(num - 1)) continue
    let count = 1
    let current = num
    while (map.has(current + 1)) {
      current += 1
      count += 1
    }
    max = Math.max(max, count)
  }

  return max
};
// @lc code=end