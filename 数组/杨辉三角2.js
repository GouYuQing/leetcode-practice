/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	let res = [];
	for (let i = 0; i <= rowIndex; i++) {
		const row = new Array(i + 1).fill(1);
		for (let j = 1; j < row.length - 1; j++) {
			row[j] = res[i - 1][j] + res[i - 1][j - 1];
		}
		res.push(row);
	}
	return res[rowIndex];
};
console.log(getRow(3));
