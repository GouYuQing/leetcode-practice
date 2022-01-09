/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
	return s.replace(/\s/g, '%20'); /* \s匹配空格 g匹配全局 */
};
console.log(replaceSpace('   '));
