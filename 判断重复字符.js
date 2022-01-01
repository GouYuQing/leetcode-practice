/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    let arr = [],max = 0;
    for(let i = 0; i < s.length; i++){
        if(arr.indexOf(s[i]) !== -1){
            arr.splice(0, arr.indexOf(s[i])+1);
        }
        arr.push(s[i]);
        max = Math.max(max, arr.length);
    }
    return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));