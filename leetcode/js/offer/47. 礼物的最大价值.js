// 在一个 m * n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 超时了
// var maxValue = function (grid) {
//   const row = grid.length
//   const column = grid[0].length

//   const visit = (grid, i, j, sum) => {
//     if (i > row - 1 || j > column - 1) return sum

//     let val = grid[i][j]
//     sum += val

//     return Math.max(visit(grid, i + 1, j, sum), visit(grid, i, j + 1, sum))
//   }

//   return visit(grid, 0, 0, 0)
// };


var maxValue = function (grid) {
  const row = grid.length
  const column = grid[0].length

  const dp = new Array(row).fill(new Array(column).fill(0))

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      console.log(i, j)
      let down = i + 1 > row ? 0 : grid[i + 1][j]
      let right = j + 1 > column ? 0 : grid[i][j + 1]
      dp[i][j] = grid[i][j] + Math.max(down, right)
    }
  }

  console.log(dp)

  return dp[row - 1][column - 1]
};

const res = maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
])
console.log('res: ', res);