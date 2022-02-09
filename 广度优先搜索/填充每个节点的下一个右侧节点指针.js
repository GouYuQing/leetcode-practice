/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
	if (!root) return root;
	let queue = [];
	queue.push(root);
	while (queue.length) {
		let temp = [];
		let length = queue.length;
		for (let i = 0; i < length; i++) {
			let node = queue.shift();
			temp.push(node);
			if (temp.length > 1) {
				temp[temp.length - 2].next = node;
			}
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
	}
	return root;
};
