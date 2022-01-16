/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + third + second = 0 ？请你找出所有和为 0 且不重复的三元组。
 */
var threeSum = function (nums) {
	let n = nums.length;
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < n - 2; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let first = nums[i];
		let map = new Map();
		for (let j = i + 1; j < n; j++) {
			let third = nums[j];
			let second = -first - third;
			if (res.length) {
				let [x, y, z] = res[res.length - 1];
				if (y === third && z === second) continue;
			}
			if (map.has(second)) {
				res.push([first, third, second]);
			} else {
				map.set(third, 1);
			}
		}
	}
	return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));