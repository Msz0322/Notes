// 590. N叉树的后序遍历

function Node(val, children) {
  this.val = val;
  this.children = children;
};

// 递归
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let ret = []
  if (!root) return ret

  const travel = (node, array) => {
    if (!node) return

    for (let child of node.children) {
      travel(child, array)
    }

    array.push(node.val)
  }

  travel(root, ret)

  return ret
};