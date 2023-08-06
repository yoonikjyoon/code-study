const continsDuplicateA = (nums) => {
  const distinct = new Set(nums);
  return distinct.size != nums.length ? true : false;
};

// console.log(continsDuplicaten[(1, 2, 3, 1)]);

const continsDuplicateB = (nums) => {
  // array.sort((a, b) => a - b);
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
