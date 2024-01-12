// https://leetcode.com/problems/merge-sorted-array/description/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i1 = 0,
    i2 = 0,
    k = 0;
  const arr1 = [...nums1];

  // base case
  while (i1 < m && i2 < n) {
    if (arr1[i1] < nums2[i2]) {
      nums1[k] = arr1[i1];
      i1++;
      k++;
    } else {
      nums1[k] = nums2[i2];
      i2++;
      k++;
    }
  }

  while (k < nums1.length) {
    if (i1 < m) {
      nums1[k] = arr1[i1];
      i1++;
      k++;
    } else {
      nums1[k] = nums2[i2];
      i2++;
      k++;
    }
  }
};

// const nums1 = [1, 3, 5, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 4, 6],
//   n = 3;
// console.log(merge(nums1, m, nums2, n));
