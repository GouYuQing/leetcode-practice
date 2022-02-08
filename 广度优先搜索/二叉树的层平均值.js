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
var averageOfLevels = function (root) {
	if (!root) return [];
	let res = [],
		queue = [];
	queue.push(root);
	while (queue.length) {
		let sum = 0;
		let length = queue.length;
		for (let i = 0; i < length; i++) {
			let node = queue.shift();
			sum += node.val;
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		res.push(sum / length);
	}
	return res;
};
