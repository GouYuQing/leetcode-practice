/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
	properties.sort((a, b) => {
		return b[0] - a[0] || a[1] - b[1]; // 攻击倒序；攻击相同时，防御正序
	});
	console.log(properties);
	let res = 0,
		max = 0;
	for (let i = 0; i < properties.length; i++) {
		if (max > properties[i][1]) {
			res++;
		} else {
			max = properties[i][1];
		}
	}
	return res;
};
console.log(
	numberOfWeakCharacters([
		[5, 5],
		[6, 3],
		[3, 6],
	])
);
