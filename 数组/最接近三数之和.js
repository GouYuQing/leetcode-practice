/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
	let sum = 0;
	let res = nums[0] + nums[1] + nums[2];
	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				sum = nums[i] + nums[j] + nums[k];
				if (Math.abs(sum - target) > Math.abs(res - target)) {
					res = res;
				} else {
					res = sum;
				}
			}
		}
	}
	return res;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
