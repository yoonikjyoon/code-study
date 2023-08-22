/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let minValue = nums[0];
  let maxValue = nums[0];
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    minValue = Math.min(minValue, minValue * nums[i]);
    maxValue = Math.max(maxValue, maxValue * nums[i]);
    result = Math.max(maxValue, minValue);
    // console.log(minValue, maxValue, result );
  }
  return result;
};

// Success
var maxProduct = function (nums) {
  let minValue = nums[0];
  let maxValue = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let tempMin = minValue * nums[i];
    let tempMax = maxValue * nums[i];
    minValue = Math.min(nums[i], Math.min(tempMin, tempMax));
    maxValue = Math.max(nums[i], Math.max(tempMin, tempMax));
    result = Math.max(maxValue, result);
  }
  return result;
};
