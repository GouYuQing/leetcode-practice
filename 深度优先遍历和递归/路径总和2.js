/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 * 叶子节点 是指没有子节点的节点。
 */
var pathSum = function (root, targetSum) {
	let res = [];
	function findSum(node, sum, arr) {
		if (!node) return;
		sum += node.val;
		arr.push(node.val);
		if (sum === targetSum && !node.left && !node.right) {
			res.push(arr.slice());
		} else {
			findSum(node.left, sum, arr);
			findSum(node.right, sum, arr);
		}
		arr.pop();
	}
	findSum(root, 0, []);
	return res;
};
