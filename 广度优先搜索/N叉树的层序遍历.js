/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return [];
	let res = [],
		queue = [];
	queue.push(root);
	while (queue.length) {
		let temp = [];
		let length = queue.length;
		while (length--) {
			let node = queue.shift();
			temp.push(node.val);
			for (let i of node.children) {
				i && queue.push(i);
			}
		}
		res.push(temp);
	}
	return res;
};
