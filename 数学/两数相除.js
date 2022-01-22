/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
	if (dividend == 0 || Math.abs(dividend) < Math.abs(divisor)) return 0;
	let isPos = true; //是正数
	if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
		isPos = false;
	}
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);
	if (dividend === divisor) return isPos ? 1 : -1;
	if (divisor === 1) return isPos ? getLimitVal(dividend) : getLimitVal(-dividend);
	let count = 0;
	while (dividend >= divisor) {
		dividend -= divisor;
		count++;
	}
	return isPos ? getLimitVal(count) : getLimitVal(-count);
	function getLimitVal(val) {
		if (val < Math.pow(-2, 31)) {
			return Math.pow(-2, 31);
		} else if (val > Math.pow(2, 31) - 1) {
			return Math.pow(2, 31) - 1;
		}
		return val;
	}
};
