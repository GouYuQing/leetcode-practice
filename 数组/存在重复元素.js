/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 */
var containsNearbyDuplicate = function (nums, k) {
	for (let i = 0; i < nums.length; i++) {
		let j = i + k;
		while (i < j) {
			if (nums[i] == nums[j]) {
				return true;
			} else {
				j--;
			}
		}
	}
	return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
