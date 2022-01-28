/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	let m = num1.length,n = num2.length;
	let res = new Array(m + n).fill(0);
	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			let mul = (num1[i] - 0) * (num2[j] - 0);
			let p1 = i + j, p2 = i + j + 1;
			let sum = mul + res[p2];// 叠加到res上
			res[p2] = sum % 10;
			res[p1] += parseInt(sum / 10);
		}
	}
	while(res[0]===0){
		res.shift();
	}
	let str = "";
	for (let i = 0; i < res.length; i++) {
		str += res[i];
	}
	return str.length ? str : "0";
};
console.log(multiply("123","456"));