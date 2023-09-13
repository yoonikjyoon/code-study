/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let answer = 0;

  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    answer = Math.max(answer, area);

    height[i] <= height[j] ? i++ : j--;
  }
  return answer;
};
