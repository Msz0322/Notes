/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let arr = []
  let node = head

  while (node) {
    arr.push(node.val)

    node = node.next
  }


  // reverse
  // return arr.reverse()
  // 栈解法
  let result = []
  while (arr.length) {
    result.push(arr.pop())
  }

  return result
};