/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = {};
  for (const str of strs) {
    const key = str.split("").sort().join();
    if (answer[key]) {
      answer[key].push(str);
    } else {
      answer[key] = [str];
    }
  }
  return Object.values(answer);
};
