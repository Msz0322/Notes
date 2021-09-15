// 589. N叉树的前序遍历

/**
 * // Definition for a Node.
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
};
// 递归
/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function (root) {
//   let ret = []
//   if (!root) return ret;

//   const preorder = (node, array) => {
//     if (!node) return
//     array.push(node.val)
//     for (let child of node.children) {
//       preorder(child, array)
//     }
//   }

//   preorder(root, ret)

//   return ret
// };

// 迭代
// /**
//  * @param {Node} root
//  * @return {number[]}
//  */
var preorder = function (root) {
  let ret = []
  if (!root) return ret;

  let queue = []
  let node = root
  while (node) {
    ret.push(node.val)
    if (node.children) {
      // 将子节点插入到原来的队列前
      queue = node.children.concat(queue)
    }
    node = queue.shift()
  }

  return ret
};

console.log('🚀 ~ file: 589.js ~ line 21 ~ preorder(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)]))', preorder(new Node(1, [new Node(3, [new Node(5), new Node(6)]), new Node(2), new Node(4)])))