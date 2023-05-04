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

var reverseBetween = function(head, m, n) {
  var dummyNode = new ListNode(0);
  var now = dummyNode;
  var tmp = null;
  var reverseLast = null;
  var reverseHead = null;
  var reverseNow = null;
  var i = 0;

  dummyNode.next = head;

  while (now) {
    tmp = now.next;

    if (i === m - 1) {
      reverseHead = now;
    }

    if (i === m) {
      reverseLast = now;
      reverseNow = now;
    }

    if (i > m && i <= n) {
      now.next = reverseNow;
      reverseNow = now;
    }

    if (i === n) {
      reverseLast.next = tmp;
      reverseHead.next = reverseNow;
    }

    now = tmp;
    i++;
  }

  return dummyNode.next;
}

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