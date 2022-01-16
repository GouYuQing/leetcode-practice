/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 * 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。
 */
var findSubstring = function (s, words) {
	// for (let i = 0; i < words.length - 1; i++) {
	// 	if (words[i].length !== words[i + 1].length) return [];
	// }
	// let arr = [];
	// for (let i = 0; i < s.length; i += words[0].length) {
	// 	arr.push(s.substr(i, words[0].length));
	// }
	// let res = [];
	// for (let i = 0; i < arr.length - words.length + 1; i++) {
	// 	let count = 0;
	// 	let temp_word = arr.slice(i, i + words.length);
	// 	for (let j = 0; j < temp_word.length; j++) {
	// 		if (words.indexOf(temp_word[j]) !== -1) {
	// 			count++;
	// 		}
	// 	}
	// 没有把words单词减去，导致indexOf重复计算，当字符串里面出现重复单词时失败
	// 	if (count == temp_word.length) {
	// 		res.push(i * words[0].length);
	// 	}
	// }
	// return res;
	const word_length = words[0].length;
	const substring_len = word_length * words.length;
	const word_count = {};
	words.map(item => {
		word_count[item] = (word_count[item] || 0) + 1;
	}); //word_count { word: 2, good: 1, best: 1 }
	const res = [];
	for (let i = 0; i <= s.length - substring_len; i++) {
		const temp_count = { ...word_count }; //每次检查都是新的
		let count = words.length;
		for (let j = i; j < i + substring_len; j += word_length) {
			const word = s.slice(j, j + word_length); //分割成每个单词
			if (!(word in temp_count) || temp_count[word] <= 0) break; //每次单词都去temp_count里面找，没找到就break
			temp_count[word]--; //找到了就单词数减一
			count--; //words数组长度也减一
		}
		if (count === 0) res.push(i);
	}
	return res;
};
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']));
