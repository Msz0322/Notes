// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0]
  let sum = 0
  for (let num of nums) {
    // 如果加完还不如不加，那就全扔了
    sum = Math.max(sum + num, num)

    max = Math.max(max, sum)
  }

  return max
};

const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log('res: ', res);
