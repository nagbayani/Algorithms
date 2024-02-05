export function findRepeatedSequences(s, k) {
  // iterate over k-length substrings of the input string
  let left = 0;
  let right = k;
  let hashmap = new Set();
  let output = new Set();
  for (let i = 0; i <= s.length; i++) {
    let substring = s.substring(left, right);
    console.log(substring);
    // if the hash of a substring has already been stored, substring is repeated, add to output
    // store the hash of the current substring to keep track of unique substrings
    if (!hashmap.has(substring)) {
      hashmap.add(substring);
    } else {
      output.add(substring);
    }
    left++, right++;
  }

  // return output after all substrings have been evalutated
  return output;
}
