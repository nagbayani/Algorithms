/*
   Top Down Approach
*/

export function TopDownfindMaxKnapsackProfit(capacity, weights, values) {
  let n = weights.length;

  // initialize 2D table
  const table = Array.from({ length: n + 1 }, () =>
    Array(capacity + 1).fill(-1)
  );

  return tpTableBuilder(capacity, weights, values, n, table);
}

function tpTableBuilder(capacity, weights, values, nthIndex, table) {
  // base case
  if (nthIndex === 0 || capacity === 0) return 0;

  if (table[nthIndex][capacity] !== -1) return table[nthIndex][capacity];
  // iterate over table, check whether weight of an item is less than or equal to current capacity
  // if so, use maximum value by including or excluding the item
  if (weights[nthIndex - 1] <= capacity) {
    table[nthIndex][capacity] = Math.max(
      values[nthIndex - 1] +
        tableBuilder(
          capacity - weights[nthIndex - 1],
          weights,
          values,
          nthIndex - 1,
          table
        ),
      tableBuilder(capacity, weights, values, nthIndex - 1, table)
    );

    return table[nthIndex][capacity];
  }
  // otherwise exclude item, use previous best value at that capacity
  table[nthIndex][capacity] = tableBuilder(
    capacity,
    weights,
    values,
    nthIndex - 1,
    table
  );
  // return last coordinate of table === maximum value that can be obtained
  return table[nthIndex][capacity];
}
