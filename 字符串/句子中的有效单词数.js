/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
	let arr = sentence.split(' ').filter(Boolean);
	return arr.filter(item => {
		return /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(item);
	}).length;
};
console.log(countValidWords('cat and  dog'));
