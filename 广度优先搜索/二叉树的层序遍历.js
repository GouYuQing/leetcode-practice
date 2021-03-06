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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root == null) return [];
	let res = [],
		queue = [];
	queue.push(root);
	while (queue.length) {
		let temp = [];
		let length = queue.length;
		while (length--) {
			let node = queue.shift();
			temp.push(node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		res.push(temp);
	}
	return res;
};
