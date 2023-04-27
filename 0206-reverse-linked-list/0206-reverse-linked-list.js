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
const reverseList = (head) => {
    // before: [PREV] [CURR] [CURR.NEXT]
    // after:  [NEXT] [CURR] [PREV]
    //                [PREV] [CURR] [NEXT]
    
    let prev = null
    let curr = head
    
    while (curr) {
        // hold next in a temporary variable
        let next = curr.next
        
        // set next to (original) prev
        curr.next = prev
        
        // set prev to (original) next
        prev = next
        
        prev = curr    // increment prev
        curr = next    // increment curr
    }
    
    return prev
};