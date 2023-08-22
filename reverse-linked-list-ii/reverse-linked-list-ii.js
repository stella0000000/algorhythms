/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

const reverseBetween = (head, left, right) => {
    let dummyNode = new ListNode(0, head)
    let leftPrev = dummyNode
    let curr = head
    
    for (let i=0; i<left-1; i++) {
        leftPrev = curr
        curr = curr.next
    }
    
    let prev = null
    let numReverse = right - left + 1
    for (let i=0; i<numReverse; i++) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    leftPrev.next.next = curr
    leftPrev.next = prev
    
    return dummyNode.next
}