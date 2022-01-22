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
 */
var isBalanced = function (root) {
	if (root == null) return true;
	return Math.abs(deepMax(root.left) - deepMax(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
	function deepMax(node) {
		if (node == null) return -1;
		return 1 + Math.max(deepMax(node.left), deepMax(node.right));
	}
};
