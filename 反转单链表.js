/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    while(current) {
        const next = current.next;// 保存下一个节点
        current.next = prev; 
        prev = current;
        current = next;
    }
    return prev;
};