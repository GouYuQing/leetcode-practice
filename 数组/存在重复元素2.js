/**
 * @param {number[]} nums
 * @return {boolean}
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */
var containsDuplicate = function (nums) {
	let arr = [...new Set(nums)];
	return !(arr.length === nums.length);
};
console.log(containsDuplicate([1, 2, 3, 4]));
