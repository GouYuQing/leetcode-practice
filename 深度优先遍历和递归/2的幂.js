/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n < 1) return false;
	if (n === 1) return true;
	if (n % 2 == 0) {
		return isPowerOfTwo(n / 2);
	}
	return false;
};
console.log(isPowerOfTwo(16));
