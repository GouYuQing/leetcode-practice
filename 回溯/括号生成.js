/**
 * @param {number} n
 * @return {string[]}
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 */
var generateParenthesis = function (n) {
	let res = [];
	// 左右括号所剩的数量，str是当前字符串
	function DFS(left, right, str) {
		if (str.length == 2 * n) {
			//满足条件就push
			res.push(str);
			return;
		}
		if (left > 0) {
			DFS(left - 1, right, str + '(');
		}
		if (left < right) {
			DFS(left, right - 1, str + ')');
		}
	}
	DFS(n, n, '');
	return res;
};
