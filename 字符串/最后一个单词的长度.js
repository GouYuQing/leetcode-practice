/**
 * @param {string} s
 * @return {number}
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 */
var lengthOfLastWord = function (s) {
	let arr = s.trim().split(' ').filter(Boolean);
	return arr[arr.length - 1].length;
};
console.log(lengthOfLastWord('   fly me   to   the moon  '));
