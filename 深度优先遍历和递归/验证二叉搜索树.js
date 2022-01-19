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
 * @return {boolean}
 *
 * 节点的左子树只包含 小于 当前节点的数。
 * 节点的右子树只包含 大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
 */
var isValidBST = function (root) {
	// if ( root == null ) return true;
	// function check(root) {
	// 	if (root.left && root.val <= root.left.val) return false;
	// 	if (root.right && root.val >= root.right.val) return false;
	// 	return check(root.left) && check(root.right);
	// }
	// check(root);
	let arr = [];
	function order(root) {
		if (root == null) return;
		order(root.left);
		arr.push(root.val);
		order(root.right);
	}
	order(root);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= arr[i + 1]) return false;
	}
	return true;
};
