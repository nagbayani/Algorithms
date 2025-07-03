from collections import defaultdict
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
       # frequency dictionary
        freq_map = defaultdict(int)

       # iterate through nums list, increase count for a frequency of nums[i]
        for i in nums:
            freq_map[i] += 1

       # Step 2: Bucket sort the numbers by frequency
        # Create a bucket for each number (maximum frequency is the length of nums)
        # Index is the frequency, value is a list of numbers
        nums_len = len(nums)
        buckets = [[] for _ in range(nums_len + 1)]

        # for key, value in freq_map.items()
        for num, freq in freq_map.items():
            buckets[freq].append(num)
        
        # Step 3: Iterate buckets in reverse to get top k frequent elements
        result = []

        # iterate descending, starting from nums array length (because this is maximum amount, if array is 6, maximum frequency is buckets[6])
        # extract number from 
        for freq in range(nums_len, 0, -1):
            for num in buckets[freq]:
                result.append(num)
                if len(result) == k:
                    return result



'''
What I learned today: 7/3/2025

Dictionary:
defaultdict() -> assigns a default value

For loops:
-----------
for _ in range(n)
if range is 6, it will iterate from 0 to 5.
-----------
for key, value in dictionary.items()
-----------
Descending order syntax:    for i in range(start, stop, step):
stop = ends before that value


for i in range(array_length, 0, -1) => start from end of array, stop at 1, descend
for i in range(N-1, -1, -1) => start at last index of array, stop at 0, descend




'''



    

