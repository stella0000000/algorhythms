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
const reverseList = head => {
    // [ PREV ] [ CURR ] [ NEXT ]
    //          [ PREV]  [ CURR ] [ NEXT ]
    // [ NEXT ] [ CURR ] [ PREV ]
    let node = null

    while (head) {
        node = new ListNode(head.val, node)
        head = head.next
    }

    return node
};