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
    let leftNode = head
    
    for (let i=0; i<left-1; i++) {
        leftPrev = leftNode
        leftNode = leftNode.next
    }
    
    let prev = null
    let numReverse = right - left + 1
    for (let i=0; i<numReverse; i++) {
        let nextTemp = leftNode.next
        leftNode.next = prev
        prev = leftNode
        leftNode = nextTemp
    }
    
    leftPrev.next.next = leftNode
    leftPrev.next = prev
    
    return dummyNode.next
}

// const reverseBetween = (head, left, right) => {
//     let dummyNode = new ListNode(0, head)
    
//     // reach node at position "left"
//     let leftPrev = dummyNode
//     let curr = head
    
//     for (let i=0; i<left-1; i++) {
//         leftPrev = curr
//         curr = curr.next
//     }
    
//     // now curr="left", leftPrev = node before left
//     // reverse from left to right
//     let prev = null
//     for (let i=0; i<right-left+1; i++) {
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     console.log({ leftPrev, prev, curr })
    
//     // link 2 to 5
//     leftPrev.next.next = curr
//     // link 1 to 4
//     leftPrev.next = prev
//     console.log({leftPrev})
    
//     return dummyNode.next
// }

// const reverseBetween = (head, left, right) => {
//     if (!head.next || left === right) return head
    
//     // we're just swapping these two nodes
//     if (right-left === 1) {
//         let dummyNode = new ListNode(head.next.val, head)
//         dummyNode.next.next = null
//         return dummyNode
//     }
//     // if left === 1 issue
//     // if right === length of list issue
    
//     let curr = head
//     let posOfBeforeLeft = left - 1
    
//     let tail = head
//     let posOfAfterRight = right + 1
    
//     while (posOfBeforeLeft > 1) {
//         curr = curr.next
//         posOfBeforeLeft--
//     }
    
//     while (posOfAfterRight > 1) {
//         tail = tail.next
//         posOfAfterRight--
//     }
//     console.log({ curr, tail })

//     // curr = node before left
//     // tail = node after right
    
//     // NOW WE NEED TO ACQUIRE MIDDLE LL
//     let count = 1
//     let middleHead = head
//     while (count !== left) {
//         middleHead = middleHead.next
//         count++
//     }
    
//     let middleTail = middleHead
//     while (middleTail && count < right) {
//         middleTail = middleTail.next
//         count++
//     }
    
//     console.log({ middleHead, middleTail })
//     middleTail.next = null
    
//     let reversed = reverse(middleHead)
    
//     curr.next = reversed
//     middleHead.next = tail
    
//     // curr.next = middleReversed
//     // lastNodeOfMiddleReversed.next = tail
    
//     return head
// }

// const reverse = (head) => {
//     let prev = null
//     let curr = head
    
//     while (curr) {
//         let next = curr.next
//         curr.next = prev
//         prev = next
//         prev = curr    // increment prev
//         curr = next    // increment curr
//     }
    
//     return prev
// }

// const reverseBetween = (head, left, right) => {
//     if (!head.next || left === right) return head
    
//     let curr = head
//     let posOfBeforeLeft = left - 1
    
//     let tail = head
//     let posOfAfterRight = right + 1
    
//     while (posOfBeforeLeft > 1) {
//         curr = curr.next
//         posOfBeforeLeft--
//     }
    
//     while (posOfAfterRight > 1) {
//         tail = tail.next
//         posOfAfterRight--
//     }

//     // curr = node before left
//     // tail = node after right
    
//     // reverse the middle
//     let prev = curr.next
//     let newHead = curr.next.next
    
//     while (newHead && newHead.next !== tail) {
//         let next = newHead.next
//         newHead.next = prev
//         // prev = next
//         prev = newHead
//         newHead = next
//     }
    
//     newHead.next = prev
//     curr.next.next = tail
//     curr.next = newHead
    
//     // curr.next = middleReversed
//     // lastNodeOfMiddleReversed.next = tail
    
//     return head
// }