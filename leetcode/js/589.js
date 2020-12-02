// 589. N叉树的前序遍历

/**
 * // Definition for a Node.
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (!root) return [];
  if (root.children) {
    for (let child of root.children) {
      preorder(child)
    }
  }

  return result
};

console.log('🚀 ~ file: 589.js ~ line 21 ~ preorder(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]))', preorder(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])))