/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let res = parseInt(s.trim());
    if(res > Math.pow(2,31) - 1){
        return Math.pow(2,31) - 1;
    }
    if(res < -Math.pow(2, 31)){
        return -Math.pow(2, 31);
    }
    if(isNaN(res)) return 0;
    return res;
};
console.log(myAtoi("words and hhh 987"));