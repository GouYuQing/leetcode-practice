/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let res = 0;
	let left = 0,
		right = height.length - 1;
	let [leftMax, rightMax] = [0, 0];
	while (left < right) {
		leftMax = Math.max(leftMax, height[left]); //更新左右两边的最大值
		rightMax = Math.max(rightMax, height[right]);
		if (leftMax < rightMax) {
			//哪个小接哪边
			res += leftMax - height[left++];
		} else {
			res += rightMax - height[right--];
		}
	}
	return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
