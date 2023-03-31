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

// iterate through list
// at each node, look at next node
// if next node is same, continue looking further ahead until either find diff't node, or end list
// once we hit diff't node, make curr.next = diff node
// else go to next node

var deleteDuplicates = function(head) {
    let dummy = new ListNode(null, head)
    let prev = dummy
    let curr = head
    
    while (curr && curr.next) {
        if (curr.val !== curr.next.val) {
            prev = curr
            curr = curr.next
        } else { // equality
            while (curr.next && prev.next.val === curr.next.val) {
                curr = curr.next
            }
            prev.next = curr.next
            curr = prev.next

        }
    }
    
    return dummy.next
    
};