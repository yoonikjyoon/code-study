/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let sum = 0;
  let str = n.toString(2);
  for (let i of str) {
    if (i === "1") sum++;
  }
  return sum;
};
