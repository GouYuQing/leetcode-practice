/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 *
 */
var searchRange = function (nums, target) {
	let find = isLeft => {
		let start = 0,
			end = nums.length - 1;
		while (start <= end) {
			let mid = start + ((end - start) >> 1);
			if (nums[mid] < target) {
				start = mid + 1;
			} else if (nums[mid] > target) {
				end = mid - 1;
			} else {
				if (isLeft) {
					if (nums[mid] == nums[mid - 1]) {
						end = mid - 1;
					} else {
						return mid;
					}
				} else {
					if (nums[mid] == nums[mid + 1]) {
						start = mid + 1;
					} else {
						return mid;
					}
				}
			}
		}
		return -1;
	};
	let left = find(true),
		right = find(false);
	return [left, right];
};
