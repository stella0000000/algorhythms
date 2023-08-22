/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let c1 = list1
    let c2 = list2
    let head = new ListNode(null)
    let tail = head
    
    while (c1 && c2) {
        let v1 = c1.val
        let v2 = c2.val
        
        if (v1 < v2) {
            tail.next = c1
            c1 = c1.next
        } else {
            tail.next = c2
            c2 = c2.next
        }
        
        tail = tail.next
    }
    
    tail.next = c1 ? c1 : c2
    
    return head.next

};