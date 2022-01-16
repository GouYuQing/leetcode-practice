/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function (num) {
	//递归函数 l,m,r是三个数的起始位置
	function match(l, m, r) {
		//处理边界情况，0开头情况等
		if (r > num.length || m > num.length - 1 || (num[l] === '0' && m - l > 1)) return false;
		if (m >= r) return match(l, m, r + 1);
		if (num[m] === '0' && r - m > 1) return match(l, m + 1, r);
		const n3 = `${+num.slice(l, m) + +num.slice(m, r)}`; //从num中取前两个数求和，得到第三个数n3
		// 剪枝：如果剩余字符比要查找的结果更短，直接返回false
		if (n3.length > num.length - r) return false;
		// 匹配成功
		if (num.slice(r, r + n3.length) === n3 && (r + n3.length === num.length || match(m, r, r + n3.length))) {
			return true;
		}
		//匹配失败
		return match(l, m, r + 1) || match(l, m + 1, r);
	}
	return match(0, 1, 2);
};
console.log(isAdditiveNumber('1023'));
