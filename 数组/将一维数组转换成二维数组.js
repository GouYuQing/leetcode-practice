/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 * 输入：original = [1,2,3,4], m = 2, n = 2
 * 输出：[[1,2],[3,4]]
 */
var construct2DArray = function(original, m, n) {
	if(original.length !== n * m) return [];
	const res = [];
	for(let i = 0;i< original.length; i +=n){
		let temp = [];
		for(let j = i; j< i+n; j ++){
			temp.push(original[j]);
		}
		res.push(temp);
	}
	return res;
};
console.log(construct2DArray([1,2,3,4], 2, 2));