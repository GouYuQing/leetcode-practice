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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
	let prev = new TreeNode(-Infinity);
	let err1,
		err2 = null;
	const order = root => {
		if (root == null) return;
		order(root.left);
		//左中右遍历，如果前面大于后面，就不对，应该是前小后大
		if (prev.val >= root.val && err1 == null) {
			err1 = prev;
		}
		if (prev.val >= root.val && err1 !== null) {
			err2 = root;
		}
		prev = root;
		order(root.right);
	};
	order(root);
	const temp = err1.val;
	err1.val = err2.val;
	err2.val = temp;
};
