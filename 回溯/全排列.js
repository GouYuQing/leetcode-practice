/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [];
	const used = {};
	function DFS(path) {
		if (path.length === nums.length) {
			res.push(path.slice());
			return;
		}
		for (let item of nums) {
			if (used[item]) continue; // 使用过的，跳过比如 选了1之后不能再选1
			path.push(item); // 选择当前的数，加入path
			used[item] = true; // 记录被使用了
			DFS(path); //递归
			path.pop();
			used[item] = false;
		}
	}
	DFS([]);
	return res;
};
console.log(permute([1, 2, 3]));
