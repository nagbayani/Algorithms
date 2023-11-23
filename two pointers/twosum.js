function twoSum(array, target) {
  // initialize a Map to hold all possible entries
  const cache = new Set();

  // iterate through array
  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];
    if (cache.has(difference)) {
      return true;
    }
    cache.add(array[i]);
  }
  return false;
}

// [1,2,3], target = 3
// array[0]= 1,   3 - 1 = 2, cache doesn't have 2, so add 1
// array[1]= 2,   3 - 2 = 1, cache has 1

// [3,1,2], target = 3
// array[0]=3,  3 - 3 = 0, no 0, so add 3 -> cache = [3]
// array[1]=1, 3 - 1 = 2, no 2, so add 1 -> cache = [3,1]
// array[2]=2, 3 - 2 = 1,

// cache = [0]
// [0, 2]
//

console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-1, 0], -1));
console.log(twoSum([1, 2, 3], 6));
