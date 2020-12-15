// function countPrimes(n: number): number {
//   let count = 0;
//   if (n === 0 || n === 1) return count;
//   const isPrime = (number: number): boolean => {
//     let mid = Math.sqrt(number);
//     for (let i = 2; i <= mid; i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   };

//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) count++;
//   }

//   return count;
// }

// 埃氏筛;

function countPrimes(n: number): number {
  const isPrime = new Array(n).fill(1);
  let count = 0;
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return count;
}
