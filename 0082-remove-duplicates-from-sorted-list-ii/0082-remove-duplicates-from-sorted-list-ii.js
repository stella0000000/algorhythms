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
  const temp = { next: head }

  let prev = temp
  let current = head
  
  while (current) {
    let isDuplicate = false
    
    while (current.next && current.val === current.next.val) {
      isDuplicate = true
      current.next = current.next.next
    }
      
    current = current.next
      
    if (isDuplicate) {
      prev.next = current
      isDuplicate = false
    } else {
      prev = prev.next
    }
  }
  return temp.next
};