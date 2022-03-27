/**
 * @param {number[]} nums
 * @return {number}
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */
var findDuplicate = function (nums) {
	let arr = new Set();
	for (let i of nums) {
		if (arr.has(i)) return i;
		arr.add(i);
	}
	return -1;
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
