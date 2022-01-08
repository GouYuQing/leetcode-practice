/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (numRows == 1) return s;
	let n = 2 * numRows - 2; //每次一个V循环
	let arr = new Array(numRows).fill('');
	for (let i = 0; i < s.length; i++) {
		let j = Math.min(i % n, n - (i % n)); //每个元素在哪一行选余数和减去余数的最小值
		arr[j] += s[i];
	}
	return arr.join('');
};
console.log(convert('PAYPALISHIRING', 3));
