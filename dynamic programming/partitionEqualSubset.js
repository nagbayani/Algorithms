/*
  Given a non-empty array of positive integers, determine if the array can be divided into two subsets so that the sum of both subsets is equal.

  nums = [1,3,7,3]  -> sum = 14, subset should equal 7

TRUE CASE
        [1,3,7,3] === [7]
INDEX: [0,1,2,3] 
#index combo  2   2         1   3

              01 23
              02 13
              03 12
                            0 123
                            1 023
                            2 013
                            3 012
            0    1       2        3           4
  MATRIX:  [] | [1]  | [1,3]  | [1,3,7]  | [1,3,7,3]
       0    t |   t  |    t   |     t    |  t
          ----------------------------------------------
       1    f |   t  |    t   |    t     |  t
          ----------------------------------------------        
       2    f |   f  |   f    |     f    | f
          ----------------------------------------------      
       3    f |   f  |   t    |    t     |  t
          ----------------------------------------------      
       4    f |  f   |        |          | 
          ----------------------------------------------      
       5    f |      |        |          | 
          ----------------------------------------------      
       6    f |      |        |          | 
          ----------------------------------------------      
       7    f |      |        |          |    
-----------------------------------------------------

       [1,2,3,11,5] 
INDEX: [0,1,2,3,4] 
TRUE ->  [1, 2, 3, 5] and [11].

#index combo  2   3            1    4
              01  234
              02  123
              03  124
              04  123
                              0   1234

              12  034
              13  024
              14  013
                              1   0234
              23  014
              24  013
                              2   0134
              34  012
                              3   0124
                              4   0123






6 items === [1,5] [2,4] [3,3] 
9 itmes === [1 8] [2,7] [3,6] [4,5]

  MATRIX:  0  | 1  | 2   | 3  
       0      |    |     |
          -----------------------
       1      |    |     |
          -----------------------         
       2      |    |     |
          -----------------------      
       3      |    |     |
*/

function canPartitionArray(nums) {
  let arraySum = 0;
  for (let i = 0; i < nums.length; i++) {
    arraySum = arraySum + nums[i];
  }

  if (arraySum % 2 !== 0) {
    console.log("THIS ODD");
    return false;
  }
  return false;
}
