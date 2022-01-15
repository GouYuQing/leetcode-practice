/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
	let first = Math.floor(n / 7),
		second = n % 7;
	if (n <= 7) return ((1 + n) * n) / 2;
	return ((first * 7 + 49) * first) / 2 + ((first + 1 + first + second) * second) / 2;
};
console.log(totalMoney(20));
