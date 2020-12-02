// 144. 二叉树的前序遍历

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 递归
// function preorderTraversal(root: TreeNode | null): number[] {
//   let result: number[] = [];
//   const preorder = (node: TreeNode | null, result: number[]) => {
//     if (!node) return;
//     result.push(node.val);
//     preorder(node.left, result);
//     preorder(node.right, result);
//   };

//   preorder(root, result);

//   return result;
// }

// 迭代
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  let result: number[] = [];
  let stack = [];

  let node = root;

  while (node) {
    result.push(node.val);
    // 重点！一定要右节点先进栈
    // 前序遍历为 根 -> 左 -> 右，
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    node = stack.pop();
  }

  return result;
}

// 思考：
// Q：为什么要用栈而不是队列？
// A：因为前序遍历为深度遍历(dfs)，队列无法回溯之前的节点，保留节点关系。
