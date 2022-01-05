/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let res = "";
    for(let i = 0;i<s.length;i++){
        getRes(i, i);
        getRes(i, i+1);
    }
    function getRes(first, second){
        while(first >= 0 && second < s.length && s[first] == s[second]){
            first --;
            second ++;
        }
        /*second-first-1是因为到first，second刚刚好是不满足情况的时候，本来是
        second-first+1,然后变成first+1 和second-1的区间*/
        if(second - first - 1 > res.length){
            res = s.slice(first + 1, second);//取值也是[fist+1,second-1区间]
        }
    }
    return res;
};
console.log(longestPalindrome("abacccc"));