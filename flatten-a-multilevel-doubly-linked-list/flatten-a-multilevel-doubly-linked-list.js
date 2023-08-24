/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

// input: head of doubly linked list
        // nodes: next, previous, child
        // child may or may not be separate doubly linked
            // may have 1+ children
// output: multilevel data structure
    // flattened

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    // DFS => stack
    if (!head) return null

    let curr = head
    const stack = []

    while (curr) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next)  // reserve in stack
            curr.next = curr.child
            curr.next.prev = curr
            curr.child = null  // taken care of
        } else if (curr.next === null && stack.length) {
            // no next, but nodes remain from previous iterations
            curr.next = stack.pop()
            curr.next.prev = curr
        }

        // increment curr
        curr = curr.next
    }

    return head
};