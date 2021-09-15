// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {}

  for (const num of nums) {
    if(!map[num]) map[num] = 0
    map[num]++
  }

  const keys = Object.keys(map)
  
  let result
  keys.forEach(key => {
    if (map[key] === 1) {
      result = key
    }
  })

  return result
};

const res = singleNumber([3,4,3,3])
console.log('res: ', res);