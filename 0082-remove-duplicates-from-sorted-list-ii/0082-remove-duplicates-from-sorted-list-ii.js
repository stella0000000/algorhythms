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
    let curr = dummy
    
    if (!curr.next) return head
    
    while (curr.next && curr.next.next) {
        if (curr.next.val !== curr.next.next.val) {
            curr = curr.next            
        } else { // equality
            let cursor = curr.next.next
            while (cursor.next && cursor.next.val === curr.next.val) {
                cursor = cursor.next
            }
            curr.next = cursor.next

        }
    }
    
    return dummy.next
    
};