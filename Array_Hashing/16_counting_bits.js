/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const ans = [...new Array(n + 1)].map(
    (_, i) => i.toString(2).split("0").join("").length
  );
  return ans;
};
