// 给定一棵二叉搜索树，请找出其中第k大的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthLargest = function (root, k) {
//   const arr = []
//   const visit = (_root) => {
//     if (_root === null) {
//       return
//     }

//     visit(_root.right)
//     arr.push(_root.val)
//     visit(_root.left)
//   }

//   visit(root)

//   return arr[k - 1]
// };
var kthLargest = function (root, k) {
  let res
  const visit = (_root) => {
    if (_root === null) {
      return
    }

    visit(_root.right)
    if (--k === 0) res = _root.val
    visit(_root.left)
  }

  visit(root)

  return res
};


const res = kthLargest({
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
})
console.log('res: ', res);