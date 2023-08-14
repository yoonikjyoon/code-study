// Aug 14. 2023 - 121 Best time to buy and sell stock

/**
 * @param {number[]} prices
 * @return {number}
 */

// First try
var maxProfit = function (prices) {
  const arrLen = prices.length;
  const minIndex = prices.indexOf(Math.min(...prices));

  if (minIndex === arrLen - 1) return 0;
  const newPrices = prices.slice(minIndex).sort();
  return newPrices[newPrices.length - 1] - newPrices[0];
};
/**
 * When test case prices = [2, 4, 1]
 * my output is 0, but Expected 2
 * I only considered index of min value in array
 * but actually if array[n+m] - array[n] > 0, then okay
 * */

// Second try
var maxProfit = function (prices) {
  // minProfit = 0 so let's start 0
  let profit = 0;
  let start = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - start > profit) {
      profit = prices[i] - start;
    }
    if (prices[i] < start) {
      start = prices[i];
    }
  }
  return profit;
};
