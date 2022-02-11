/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 给你一个 下标从 0 开始 的整数数组 nums ，其中 nums[i] 表示第 i 名学生的分数。另给你一个整数 k 。
 * 从数组中选出任意 k 名学生的分数，使这 k 个分数间 最高分 和 最低分 的 差值 达到 最小化
 */
var minimumDifference = function (nums, k) {
	if (k === 1) return 0;
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		let temp = nums.slice(i, i + k);
		res.push(Math.abs(temp[temp.length - 1] - temp[0]));
	}
	res.sort((a, b) => a - b);
	return res[0];
};
console.log(minimumDifference([9, 4, 1, 7], 2));
