// Aug 14 2023 - 53. Maximum Subarray

/**
 * subarray : a contiguous non-empty sequence of elements within an array.
 * @param {number[]} nums
 * @return {number}
 * case 1 : [-2,1,-3,4,-1,2,1,-5,4]
 * case 2 : [1]
 * case 3 : [5,4,-1,7,8]
 */

// First try
var maxSubArray = function (nums) {
  let sum = 0;
  if (nums.length === 1) return nums[0];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (sum + nums[i] >= 0) {
      sum += nums[i];
    } else {
      sum = 0;
    }
  }
  return sum;
};
/**
 * I considered only when sum+nums[i] >=0
 * so in case1, expected result is 6
 * but the output is 5.
 * Because when nums[6] = 1 -> sum: 6 and when nums[7] = -5 -> sum is still bigger than 0
 * so the for loop keeps run. eventually sum comes to 5
 */

// Second try
var maxSubArray = function (nums) {
  let sum = 0;
  let result = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > result) {
      result = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return result;
};

// Another solution - Kadane's Algorithm
var maxSubArray = function (nums) {
  let best_sum = nums[0];
  let current_sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current_sum = Math.max(nums[i], current_sum + nums[i]);
    best_sum = Math.max(best_sum, current_sum);
  }
  return best_sum;
};
