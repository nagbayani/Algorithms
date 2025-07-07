from collections import defaultdict
from typing import List

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # initialize map to store groups anagrams
        group_dict = defaultdict(list)

        # iterate through word in list
        for word in strs:
            # sort the word letters
            current = word
            list_current = list(current)
            word_to_sort = sorted(list_current)
            sorted_word = "".join(word_to_sort)

            # if key not in map, store the original word in map as a value
            if sorted_word not in group_dict:
                group_dict[sorted_word] = []

            group_dict[sorted_word].append(word)
        
        result = list(group_dict.values())
        return result

        