// 5. 最长回文子串
function longestPalindrome(s: string): string {
  function findPalindromeFromCenter(
    l: number,
    r: number
  ): string {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      --l;
      ++r;
    }

    return s.substring(l + 1, r);
  }

  let result = "";

  for (let i = 0; i < s.length; i++) {
    let s1 = findPalindromeFromCenter(i, i);
    let s2 = findPalindromeFromCenter(i, i + 1);

    result = s1.length > result.length ? s1 : result;
    result = s2.length > result.length ? s2 : result;
  }

  return result;
}

console.log(
  '🚀 ~ file: 5.ts ~ line 39 ~ longestPalindrome("babad")',
  longestPalindrome("babad")
);
