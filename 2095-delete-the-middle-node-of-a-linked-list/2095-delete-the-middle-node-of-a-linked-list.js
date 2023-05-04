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
var deleteMiddle = function(head) {
    // find pointer previous to node to delete
    // pointer.next to pointer.next.next
    if (!head || !head.next) return null
    
    // find mid node
    let curr = head
    let count = 1
    
    while (curr.next) {
        curr = curr.next
        count++
    }
    
    let mid = Math.floor(count / 2)
    
    curr = head
    for (let i=0; i<mid - 1; i++) curr = curr.next
    // console.log(curr)
    curr.next = curr.next.next
    
    return head
};