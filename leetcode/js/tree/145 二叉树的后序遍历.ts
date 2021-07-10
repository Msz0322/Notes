// 145. 二叉树的后序遍历

import { TreeNode } from "./Node";

// 递归
// function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return [];
//   let result: number[] = [];
//   const postorder = (node: TreeNode | null, array: number[]) => {
//     if (!node) return;
//     if (node.left) postorder(node.left, array);
//     if (node.right) postorder(node.right, array);
//     array.push(node.val);
//   };

//   postorder(root, result);

//   return result;
// }

// 迭代
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  let result: number[] = [];
  let stack: TreeNode[] = [];

  let node: TreeNode | undefined = root;

  while (node) {
    // 后序遍历顺序为左右根
    // 逆向思维，将后续遍历的节点插入到之前的节点之前，但因为整体移动数组元素，导致性能损耗
    result.unshift(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);

    node = stack.pop();
  }

  return result;
}
