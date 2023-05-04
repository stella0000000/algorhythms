/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    let tortoise = head
    let hare = head
    
    while (hare && hare.next) {
        tortoise = tortoise.next
        hare = hare.next.next
    }
    
    return tortoise
};