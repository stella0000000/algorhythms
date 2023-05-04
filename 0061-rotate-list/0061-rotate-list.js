/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head) return head
    
    // get length of ll
    let tail = head
    let size = 1

    while (tail.next) {
        tail = tail.next
        size++
    }
    
    let rotated = head
    for (let i=0; i<k%size; i++) {
        rotated = rotate(rotated, k, size)
    }
    
    return rotated
}

const rotate = (head, k, size) => {
    let count = size-2
    let penultimate = head
    while (count !== 0) {
        penultimate = penultimate.next
        count--
    }
    
    let tail = penultimate.next
    penultimate.next = null
    tail.next = head

    return tail
}