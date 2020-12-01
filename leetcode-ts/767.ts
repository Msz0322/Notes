// 767. 重构字符串
function reorganizeString(S: string): string {
  const map: {
    [propName: string]: number;
  } = {};
  for (let char of S) {
    if (!map[char]) map[char] = 0;
    map[char]++;
  }

  let sortedChars = Object.keys(map).sort((a, b) => {
    return map[b] - map[a];
  });

  if (map[sortedChars[0]] > (S.length + 1) / 2) return "";

  // 间隔排序 先排奇数位置再排偶数位置

  let result = [];
  let index = 0;
  let charIndex = 0;
  let char = sortedChars[charIndex];
  // 排奇数
  while (char) {
    result[index] = char;

    index += 2;
    if (index >= S.length) {
      index = 1;
    }
    
    if (map[char] > 1) {
      map[char]--;
    } else {
      char = sortedChars[++charIndex];
    }
  }

  return result.join('')
}

console.log(
  '🚀 ~ file: 767.ts ~ line 6 ~ reorganizeString("ogccckcwmbmxtsbmozli")',
  reorganizeString("ogccckcwmbmxtsbmozli")
);
