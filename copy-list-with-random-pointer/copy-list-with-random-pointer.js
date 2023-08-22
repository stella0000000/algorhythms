/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    const map = new Map([[null, null]])
    let node = head
    
    while (node) {
        map.set(node, new Node(node.val, null, null))
        node = node.next
    }
    
    node = head
    
    while (node) {
        const newNode = map.get(node)
        newNode.next = map.get(node.next)
        newNode.random = map.get(node.random)
        node = node.next
    }
    
    return map.get(head)
};