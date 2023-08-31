/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = Math.min.apply(null, nums);
  return min;
};

// You must write an algorithm that runs in O(log n) time!!!!!!!
// O(log n) time = Binary search

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1; // root > target ? go right
    else right = mid; // root < target ? go left
  }
  return nums[left];
};
