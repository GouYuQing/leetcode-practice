/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
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
