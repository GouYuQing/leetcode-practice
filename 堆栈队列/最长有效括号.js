/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	// function expend(s, l, r) {
	// 	//字符串、左边索引，右边索引
	// 	while (s[l - 1] === '(' && s[r + 1] === ')') {
	// 		l--;
	// 		r++;
	// 	}
	// 	return [l, r];
	// }
	// let map = {};
	// let l = 0;
	// (r = 0), (max = 0);
	// while (true) {
	// 	l = s.indexOf('()', r);
	// 	if (l === -1) break;
	// 	r = l + 1;
	// 	[l, r] = expend(s, l, r); //从（）往两边扩大
	// 	while (l - 1 in map) {
	// 		[l, r] = expend(s, map[l - 1], r);
	// 	}
	// 	map[r] = l;
	// 	max = Math.max(max, r - l + 1);
	// }
	// return max;
	const valid = Array(s.length).fill(0); //数组 0充满
	const stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') stack.push(i); //入栈的不是 (，而是它们的下标

		if (s[i] === ')' && stack.length > 0) {
			valid[i] = 1;
			valid[stack.pop()] = 1; //stack.pop()是（的下标
		}
		console.log(valid);
	}
	let count = 0,
		max = 0;
	for (let v of valid) {
		//在vaild里面找最长的1序列就是长度
		v && count++;
		v || (count = 0);
		count > max && (max = count);
	}
	return max;
};
console.log(longestValidParentheses(')()())'));
