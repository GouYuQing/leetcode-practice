/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	if (nums.indexOf(target) !== -1) {
		return nums.indexOf(target);
	} else {
		for (let i = 0; i < nums.length; i++) {
			if (nums[0] > target) return 0;
			if (nums[nums.length - 1] < target) return nums.length;
			if (nums[i] < target && nums[i + 1] > target) return i + 1;
		}
	}
};
console.log(searchInsert([1, 3, 5, 6], 2));
