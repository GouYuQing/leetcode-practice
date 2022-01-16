/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
	return nums.map(item => {
		return nums[item];
	});
};
console.log(buildArray([5, 0, 1, 2, 3, 4]));
