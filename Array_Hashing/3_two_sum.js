var twoSum = function (nums, target) {
  const indices = {}; // 각 index 알아야하니까 객체화
  nums.forEach((item, index) => {
    indices[item] = index;
  });
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    // nums=[1, 3, 4, 2], target=6 -> output[1, 1]나와버림
    // if (indices[n]) {
    if (indices[n] && indices[n] !== i) {
      return [i, indices[n]];
    }
  }
};
