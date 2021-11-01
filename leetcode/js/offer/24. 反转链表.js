/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head
  let pre = null

  while (node) {
    const temp = node.next

    node.next = pre
    pre = node

    node = temp
  }

  return pre
};