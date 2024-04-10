/*
Given an integer total that represents the target amount of money and a list of integers coins that represents different coin denominations, find the minimum number of coins required to make up the total amount. If it’s impossible to achieve the target amount using the given coins, return -1. If the target amount is 0, return 0.
*/

/*    //[1,2,3]  total = 5

IF target = 0, then we just return 0. END PROBLEM


@Success Condition, RESULT GUARANTEED: IF we assume that we have an infinite number of each kind of coin.
  as long as we can have a combination of coins that equals EXACTLY to the total, there WILL be ALWAYS be a minimum coin result.
  note: if there is at least a 1, there will always be a min value result.
  Example: coins = [1,2,3]  total= 5



IF we can't find ANY combination of coins that fails to equal to TOTAL
  RETURN -1 
  Example: coins = [20,3,4]  total= 10
           coins = []

*/

function minimumCoins(coins, rem, counter) {
  if (rem < 0) {
    console.log(`-1 @rem=${rem} MOVE TO NEXT COIN IN SAME REM`);
    return -1;
  }
  if (rem === 0) {
    return 0;
  }
  if (counter[rem - 1] != Number.MAX_VALUE) {
    console.log(`MEMOIZE, in rem=${rem} already logged counter[${rem} - 1]`);
    return counter[rem - 1];
  }
  let minimum = Number.MAX_VALUE;
  coins.forEach((coin) => {
    console.log(`START forEach COIN= ${coin}, rem=${rem} `);
    let result = minimumCoins(coins, rem - coin, counter);
    if (result >= 0 && result < minimum) {
      minimum = 1 + result;
      console.log(`forEach RESULT=${result} for coin=${coin}, rem=${rem}`);
      console.log(`forEach minimum= ${minimum}`);
    }
  });

  if (minimum != Number.MAX_VALUE) {
    counter[rem - 1] = minimum;
    console.log(`#1 Counter=minimum, table[${rem}-1]=`, minimum);
  } else {
    counter[rem - 1] = -1;
    console.log(`#2 already have minimum= ${minimum}, @rem=${rem}`);
  }

  console.log("TABLE", counter);
  console.log(
    `END CURRENT RETURN VALUE for @rem=${rem} table[${rem}-1]=`,
    counter[rem - 1]
  );
  return counter[rem - 1];
}

function coinChange(coins, total) {
  if (total < 1) {
    return 0;
  }

  /* 
  1st Parameter: coins we have
  2nd Parameter: total we have to calculate
  3rd Parameter: Array with length of total - each array slot initially set to infinite
  */
  return minimumCoins(coins, total, Array(total).fill(Number.MAX_VALUE));
}

function main() {
  let coins = [1, 2, 3];
  let total = 5;

  return coinChange(coins, total);
}

main();

/*  [1,2,3]  total=5 
START forEach COIN= 1, rem=5 
START forEach COIN= 1, rem=4 
START forEach COIN= 1, rem=3 
START forEach COIN= 1, rem=2 
START forEach COIN= 1, rem=1 
forEach RESULT=0 for coin=1, rem=1
forEach minimum= 1
START forEach COIN= 2, rem=1 
-1 @rem=-1 MOVE TO NEXT COIN IN SAME REM
START forEach COIN= 3, rem=1 
-1 @rem=-2 MOVE TO NEXT COIN IN SAME REM
#1 Counter=minimum, table[1-1]= 1
TABLE [
  1,
  1.7976931348623157e+308,
  1.7976931348623157e+308,
  1.7976931348623157e+308,
  1.7976931348623157e+308
]
END CURRENT RETURN VALUE for @rem=1 table[1-1]= 1

====================================== start @rem=2
forEach RESULT=1 for coin=1, rem=2
forEach minimum= 2
START forEach COIN= 2, rem=2 
forEach RESULT=0 for coin=2, rem=2
forEach minimum= 1
START forEach COIN= 3, rem=2 
-1 @rem=-1 MOVE TO NEXT COIN IN SAME REM
#1 Counter=minimum, table[2-1]= 1
TABLE [
  1,
  1,
  1.7976931348623157e+308,
  1.7976931348623157e+308,
  1.7976931348623157e+308
]
END CURRENT RETURN VALUE for @rem=2 table[2-1]= 1


====================================== start @rem=3
forEach RESULT=1 for coin=1, rem=3
forEach minimum= 2
START forEach COIN= 2, rem=3 
MEMOIZE, in rem=1 already logged counter[1 - 1]
forEach RESULT=1 for coin=2, rem=3
forEach minimum= 2
START forEach COIN= 3, rem=3 
forEach RESULT=0 for coin=3, rem=3
forEach minimum= 1
#1 Counter=minimum, table[3-1]= 1
TABLE [ 1, 1, 1, 1.7976931348623157e+308, 1.7976931348623157e+308 ]
END CURRENT RETURN VALUE for @rem=3 table[3-1]= 1

====================================== start @rem=4
forEach RESULT=1 for coin=1, rem=4
forEach minimum= 2
START forEach COIN= 2, rem=4 
MEMOIZE, in rem=2 already logged counter[2 - 1]
forEach RESULT=1 for coin=2, rem=4
forEach minimum= 2
START forEach COIN= 3, rem=4 
MEMOIZE, in rem=1 already logged counter[1 - 1]
forEach RESULT=1 for coin=3, rem=4
forEach minimum= 2
#1 Counter=minimum, table[4-1]= 2
TABLE [ 1, 1, 1, 2, 1.7976931348623157e+308 ]
END CURRENT RETURN VALUE for @rem=4 table[4-1]= 2



====================================== start @rem=5
forEach RESULT=2 for coin=1, rem=5
forEach minimum= 3
START forEach COIN= 2, rem=5 
MEMOIZE, in rem=3 already logged counter[3 - 1]
forEach RESULT=1 for coin=2, rem=5
forEach minimum= 2
START forEach COIN= 3, rem=5 
MEMOIZE, in rem=2 already logged counter[2 - 1]
forEach RESULT=1 for coin=3, rem=5
forEach minimum= 2
#1 Counter=minimum, table[5-1]= 2
TABLE [ 1, 1, 1, 2, 2 ]
END CURRENT RETURN VALUE for @rem=5 table[5-1]= 2
*/
