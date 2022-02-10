/**
 * @param {number[]} nums
 * @return {number}
 * 具有线性时间复杂度。 你可以不使用额外空间来实现
 * 输入: [2,2,1]
 * 输出: 1
 */
var singleNumber = function (nums) {
	let res = 0;
	for (let i = 0; i < nums.length; i++) {
		res ^= nums[i]; //异或运算 相同为0，不同为1，所有出现偶数次的整数都会相互抵消变成0，只有唯一出现奇数次的整数会被留下
	}
	return res;
};
console.log(singleNumber([2, 2, 1]));
