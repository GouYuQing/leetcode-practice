/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *candidates 中的每个数字在每个组合中只能使用 一次
 */
var combinationSum2 = function (candidates, target) {
	candidates.sort((a, b) => a - b);
	let res = [];
	function composeNumber(start, temp, sum) {
		//start是当前选择的起点索引 temp是当前的数组 sum是当前求和
		if (sum >= target) {
			if (sum == target) {
				res.push(temp.slice());
			}
			return;
		}
		for (let i = start; i < candidates.length; i++) {
			if (i - 1 >= start && candidates[i] == candidates[i - 1]) {
				continue;
			}
			temp.push(candidates[i]);
			composeNumber(i + 1, temp, sum + candidates[i]);
			temp.pop();
		}
	}
	composeNumber(0, [], 0);
	return res;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
