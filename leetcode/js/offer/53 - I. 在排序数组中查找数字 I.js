// 统计一个数字在排序数组中出现的次数。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const count = nums.reduce((count, n) => {
    if (n === target) count++

    return count
  }, 0)

  return count
};
