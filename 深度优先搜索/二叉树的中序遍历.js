/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 中序遍历（左中右）
 * 后序遍历（左右中）
 * 前序遍历（中左右）
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
	let res = [];
	function order(root) {
		if (root == null) return;
		order(root.left);
		res.push(root.val);
		order(root.right);
	}
	order(root);
	return res;
};
