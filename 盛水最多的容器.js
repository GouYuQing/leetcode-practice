/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	if (!height.length) return 0;
	let res = 0;
	let left = 0,
		right = height.length - 1;
	while (left < right) {
		let min_height = Math.min(height[left], height[right]);
		res = Math.max(res, min_height * (right - left));
		if (height[left] <= height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return res;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
