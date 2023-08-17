/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(null)    
  let tail = head

  let carry = 0
  let c1 = l1
  let c2 = l2

  while (c1 || c2 || carry !== 0) {
      let v1 = c1 ? c1.val : 0
      let v2 = c2 ? c2.val : 0
      
      let sum = v1 + v2 + carry
      let digit = sum > 9 ? sum - 10 : sum
      carry = sum > 9 ? 1 : 0
      
      tail.next = new ListNode(digit)
      
      if (c1) c1 = c1.next
      if (c2) c2 = c2.next
      tail = tail.next
  }
  
  tail.next = c1 ? c1 : c2
  
  return head.next
};