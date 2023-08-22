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

// const reverseBetween = (head, left, right) => {
//     let dummyHead = new ListNode(0, head)
//     let leftPrev = dummyHead
//     let curr = head
    
//     while (curr && curr.val !== left) {
//         leftPrev = curr
//         curr = curr.next
//     }
//     // [ 1 2 3 4 5]
//     // [ 1 4 3 2 5]
    
//     let prev = null
//     let numTimes = right - left + 1 // for reversal
    
//     for (let i=0; i<numTimes; i++) {
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
    
//     leftPrev.
//     return dummyHead.next
// }

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
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    
    leftPrev.next.next = curr
    leftPrev.next = prev
    
    return dummyNode.next
}