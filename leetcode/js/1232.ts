// function checkStraightLine(coordinates: number[][]): boolean {
//   const getRatio = (v1: number[], v2: number[]) => {
//     return (v1[1] - v2[1]) / (v1[0] - v2[0]);
//   };

//   let ratio: number = getRatio(coordinates[1], coordinates[0]);

//   let surplus = coordinates.slice(2);

//   for (let vector of surplus) {
//     if (getRatio(vector, coordinates[0]) !== ratio) return false;
//   }

//   return true;
// }

function checkStraightLine(coordinates: number[][]): boolean {
  const len = coordinates.length;

  for (let i = 1; i < len - 1; i++) {
    let dx = coordinates[i][0] - coordinates[i - 1][0];
    let dy = coordinates[i][1] - coordinates[i - 1][1];

    let dx2 = coordinates[i + 1][0] - coordinates[i][0];
    let dy2 = coordinates[i + 1][1] - coordinates[i][1];

    if (dy * dx2 !== dy2 * dx) return false;
  }

  return true;
}

let result = checkStraightLine([
  [0, 0],
  [0, 1],
  [0, -1],
]);

console.log(result);

//
