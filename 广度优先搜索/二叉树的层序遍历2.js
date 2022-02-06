/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
	if (root == null) return [];
	let res = [], //最后结果
		queue = [];
	queue.push(root);
	while (queue.length) {
		let temp = []; // 存放当前层级节点数组
		let length = queue.length;
		while (length--) {
			let node = queue.shift();
			temp.push(node.val);
			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}
		res.push(temp);
	}
	return res.reverse();
};
