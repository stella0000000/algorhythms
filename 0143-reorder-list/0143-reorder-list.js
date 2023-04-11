/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// n = 1 - 50000
// cannot modify the values in the list's nodes
// only nodes themselves may be changed

var reorderList = function(head) {
    // find midpoint
    let hare = head
    let tortoise = head
    
    while (hare.next) {
        if (hare.next.next) {
            hare = hare.next.next
        } else {
            hare = hare.next // so loop exits in even #
        }
        
        tortoise = tortoise.next    // midpoint
    }
    
    // console.log({ tortoise })
    
    // tortoise points to start of 2nd half of list
    // reverse latter half of list
    // curr points to last node
    let curr = tortoise
    let prev = null
    // [PREV] [CURR] [CURR.NEXT]
    // [CURR.NEXT] [CURR] [PREV]
        // next = curr.next
        // CURR.NEXT = PREV
        // PREV = next    
    while (curr.next) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    curr.next = prev

    // merge
    let pointer = head
    prev = null
    
    while (curr.next) {
        // head => curr => head.next => curr.next ...
        let temp = pointer.next
        pointer.next = curr
        pointer = temp
        
        temp = curr.next
        curr.next = pointer
        
        curr = temp
    }
};