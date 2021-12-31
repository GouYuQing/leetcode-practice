/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 */
var threeSum = function (nums) { 
	if (nums.length < 3) { 
		return [];
	}
	nums.sort((a, b) => { return a - b; });
	const res = [];
	for (let i = 0; i < nums.length; i++) { 
		if (nums[i] > 0) break;
		let first = nums[i];
		if (i > 0 && nums[i] == nums[i - 1]) continue;
		let new_arr = new Set();
		for (let j = i + 1; j < nums.length; j++) { 
			let third = nums[j];
			let second = -(first + third);
			if (new_arr.has(second)) {
				res.push([first, third, -(first + third)]);
				while (j < nums.length - 1 && nums[j] == nums[j + 1]) j++;
			}
			new_arr.add(third);
		}
	}
	
	return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));