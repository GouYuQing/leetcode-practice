/**
 * @param {number} n
 * @return {number}
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */
var fib = function (n) {
	let arr = [0n, 1n];
	for (let i = 2n; i <= n; i++) {
		arr[i] = arr[i - 1n] + arr[i - 2n];
	}
	return arr[n] % 1000000007n;
};
