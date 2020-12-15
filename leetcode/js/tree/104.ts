import { TreeNode } from "./Node";

// function maxDepth(root: TreeNode | null): number {
//   let max = 0;
//   if (!root) return max;

//   const dps = (node: TreeNode, depth: number) => {
//     if (!node) return;

//     max = Math.max(max, depth);
//     if (node.left) dps(node.left, depth + 1);
//     if (node.right) dps(node.right, depth + 1);
//   };

//   dps(root, 1);

//   return max;
// }

function maxDepth(root: TreeNode | null): number {
  return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right));
}
