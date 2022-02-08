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
var largestValues = function (root) {
	if (!root) return [];
	let res = [],
		queue = [];
	queue.push(root);
	while (queue.length) {
		let max_num = queue[0].val;
		let length = queue.length;
		while (length--) {
			let node = queue.shift();
			max_num = Math.max(max_num, node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		res.push(max_num);
	}
	return res;
};
