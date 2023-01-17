/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // nums가 커질 수록 무거움..
  // return nums.map((num, index) => nums.slice(0, index).concat(nums.slice(index+1, nums.length)).reduce((acc, curr) => acc * curr));

  const answer = Array(nums.length).fill(1); // 곱하기의 특성 생각하기! 1

  for (let i = 1; i < nums.length; i++) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * right;
    right *= nums[i];
  }
  return answer;
};
