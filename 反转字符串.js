/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    /*递归本地可以 线上不行 */
    // if(s.length <= 1) return s;
    // return s.splice(s.length - 1, 1).concat(reverseString(s));
    /*es6解构赋值 */
    for(let i = 0;i<s.length/2;i++){
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"]));