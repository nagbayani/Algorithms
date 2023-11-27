export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
    if (left >= right) {
      return true;
    }
  }

  return false;
}
