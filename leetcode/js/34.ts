// 34. 在排序数组中查找元素的第一个和最后一个位置

// function searchRange(nums: number[], target: number): number[] {
//   return [nums.indexOf(target), nums.lastIndexOf(target)];
// }

// 时间复杂度为O(logn)
function searchRange(nums: number[], target: number): number[] {
  function binarySearch(
    nums: number[],
    low: number,
    high: number,
    target: number
  ): number {
    if (low > high) return -1;

    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return binarySearch(nums, low, mid - 1, target);
    } else if (nums[mid] < target) {
      return binarySearch(nums, mid + 1, high, target);
    }
  }

  let index: number = binarySearch(nums, 0, nums.length - 1, target);
  if (index === -1) return [-1, -1];
  
  let left: number = index;
  let right: number = index;

  while (nums[left] === target) {
    left--;
  }

  while (nums[right] === target) {
    right++;
  }

  return [left + 1, right - 1];
}

// console.log(
//   "🚀 ~ file: 34.ts ~ line 8 ~ searchRange([5, 7, 7, 8, 8, 10], 8)",
//   searchRange([5, 7, 7, 8, 8, 10], 8)
// );
