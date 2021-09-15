// 429. N 叉树的层序遍历
import { Node } from "./Node";

function levelOrder(root: Node | null): number[][] {
  let ret: number[][] = [];
  if (!root) return ret;

  let queue = [root];

  while (queue.length) {
    ret.push([]);
    let temp: Node[] = [];
    for (let node of queue) {
      ret[ret.length - 1].push(node.val);
      if (node.children) temp = temp.concat(node.children);
    }

    queue = temp;
  }

  return ret;
}
