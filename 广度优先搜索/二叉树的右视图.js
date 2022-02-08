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
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (root == null) return [];
	let res = [],
		queue = [];
	queue.push(root);
	while (queue.length) {
		let length = queue.length;
		while (length--) {
			let node = queue.shift();
			if (!length) {
				res.push(node.val);
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return res;
};
