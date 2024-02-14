var twoSum = function (nums, target) {
  // #1 Double for-loop
  // Time 0(n^2)
  // Space 0(1)
  // for (let i = 0; i < nums.length - 1; i++) {
  //     for (let k = i+1; k < nums.length; k++) {
  //         if (nums[i] + nums[k] === target) return [i,k]
  //     }
  // }

  // Time 0(n)
  // Space 0(n)
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) {
      return [hash[nums[i]], i];
    }

    hash[target - nums[i]] = i;
  }
};

// const nums = [2, 7, 11, 15];
// const target = 9
// const nums = [3, 2, 4];
// const target = 6;
const nums = [3, 2, 3];
const target = 6;
console.log(twoSum(nums, target));
