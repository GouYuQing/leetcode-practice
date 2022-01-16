/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
	let index = null;
	if (nums.length === 1) return 0;
	let arr = [...new Set(nums.map(item => item))];
	arr.sort((a, b) => a - b);
	let max_num = arr[arr.length - 1],
		max_second = arr[arr.length - 2];
	if (max_num / max_second >= 2) {
		index = nums.indexOf(max_num);
	} else {
		index = -1;
	}
	return index;
};
console.log(dominantIndex([1]));
