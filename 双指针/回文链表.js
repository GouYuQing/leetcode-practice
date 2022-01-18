/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
	if (head == null) return true;
	let res = [];
	while (head) {
		res.push(head.val);
		head = head.next;
	}
	let first = 0;
	let last = res.length - 1;
	while (first < last) {
		if (res[first] !== res[last]) {
			return false;
		}
		first++;
		last--;
	}
	return true;
};
