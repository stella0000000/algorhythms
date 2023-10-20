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
    if (!head) return null
    
    const map = new Map()
    
    // just build new nodes for the COPY
    // traversing original
    let curr = head
    while (curr) {
        map.set(curr, new Node(curr.val))
        curr = curr.next
    }
    
    // now we link nodes
    curr = head
    while (curr) {
        // original = curr
        // copy = map.get(curr)
        let copy = map.get(curr)
        let next = curr.next
        let random = curr.random
        
        copy.next = map.get(next) || null
        copy.random = map.get(random) || null
        
        curr = curr.next
    }
    
    return map.get(head)
};

/*
    linked list, length n
        with random pointer @ any other node || null
    construct a deep copy of the list
        n brand new nodes
    none of the pointers in new list should point to original
    return head of copied linked list
    
    pseudocode / thoughts:
        edge cases:
            empty list: !head => return null
         
         for copied list
            new Node()
            
        init map
            build the nodes here
            that's it
            
        how do we point random to already created copy node
        
        // init map for original list
        //     keys are node
        //     vals correspond with that node's .random
    
        currNodeOrig
        currNodeCopy
        
        while (currNodeOrig !== null) {
            currNodeCopy = new Node()
            currNodeOrig = currNodeOrig.next
            currNodeCopy = currNodCopy.next
        }
        
        init map = {}
            key is a node.val
            val is node itself
            
        traverse the original list (every node, and its val + .next)
            but now we need the rand pointers!
            if (!node.val in map) map[node.random.val] = new COPY node
            
        
*/