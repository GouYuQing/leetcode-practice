/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 * length太大没法通过测试用例测试上用的500作为边界
 */
var kSmallestPairs = function (nums1, nums2, k) {
	let res = [];
	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			res.push([nums1[i], nums2[j]]);
		}
	}
	return res.sort((a, b) => a[0] + a[1] - b[0] - b[1]).slice(0, k);
};
console.log(kSmallestPairs([1, 2], [3], 2));
