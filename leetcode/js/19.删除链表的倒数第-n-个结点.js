/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 前后指针
  let dummy = new ListNode(0, head)
  let first = head
  let second = dummy

  for (let i = 0; i < n; ++i) {
    first = first.next;
  }

  while (first) {
    second = second.next
    first = first.next
  }

  second.next = second.next.next

  let node = dummy.next
  return node
};
// @lc code=end

removeNthFromEnd([1, 2, 3, 4, 5], 2)