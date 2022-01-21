/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
	//一层楼有一种方式，两层楼有两种方式，三层楼有3种方式
	const dp = new Array(n + 1).fill(0);
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i < dp.length; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}
	return dp[n];
};
