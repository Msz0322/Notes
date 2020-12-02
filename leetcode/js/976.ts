// 976. 三角形的最大周长
function largestPerimeter(A: number[]): number {
  /** 能否组成三角形 */
  function isTriangle(a: number, b: number, c: number) {
    // 两边之和大于第三边
    return a + b > c && a + c > b && b + c > a;
  }

  A.sort((a, b) => a - b);
  // 从最长边开始取
  for (let i = A[A.length - 1]; i >= 2; i--) {
    if (isTriangle(A[i], A[i - 1], A[i - 2])) {
      return A[i] + A[i - 1] + A[i - 2];
    }
  }

  return 0;
}

console.log(
  "🚀 ~ file: 976.ts ~ line 5 ~ largestPerimeter([2, 1, 2])",
  largestPerimeter([4, 2, 1, 2])
);
