// 102. 二叉树的层序遍历
import { TreeNode } from "./Node";

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let result: number[][] = [];

  let queue: TreeNode[] = [root];

  while (queue.length) {
    result.push([]);
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift() as TreeNode;
      result[result.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
}
