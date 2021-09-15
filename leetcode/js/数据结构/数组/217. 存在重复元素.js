// 给定一个整数数组，判断是否存在重复元素。

// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map ={}
  let flag = false
  for (let num of nums) {
    if(!map[num]) map[num] = 0

    map[num]++

    if (map[num] === 2) {
      flag = true
      break
    }
  }
  return flag
};

const res = containsDuplicate([1,2,3,1])

