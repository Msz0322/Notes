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
// function inorderTraversal(root: TreeNode | null): number[] {
//   let result: number[] = [];
//   if (!root) return result;

//   // 中序遍历 左根右
//   const inorder = (node: TreeNode, array: number[]) => {
//     if (!node) return;

//     if (node.left) inorder(node.left, array);
//     result.push(node.val);
//     if (node.right) inorder(node.right, array);
//   };

//   inorder(root, result);

//   return result;
// }

// 迭代
function inorderTraversal(root: TreeNode | null): number[] {
  let ret:number[] = [];
  if (!root) return ret;

  let stack: TreeNode[] = [];

  let node:TreeNode | null | undefined = root;

  while (node || stack.length) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop() as TreeNode;
    ret.push(node.val);
    node = node.right;
  }

  return ret;
}