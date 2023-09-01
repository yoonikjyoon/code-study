/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // 정렬시키기
  let result = [];

  if (nums.length < 3) return [];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (nums[i] > 0) return result;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      // sum = 0 : left, right 각각 이동
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      }
      // sum > 0 : sum이 작아져야함 -> right를 왼쪽으로
      if (sum > 0) {
        right--;
      }
      // sum < 0 : sum이 커져야함 -> left를 오른쪽으로
      if (sum < 0) {
        left++;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};
