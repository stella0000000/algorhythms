/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

var traverse = function(node, map) {
    // while crawl through graph
    // construct new nodes along the way
    // somehow reach every node
        // map new nodes
            // key is index: val is reference
    
    if (!(node.val in map)) {
        // doesn't exist yet
        map[node.val] = new Node(node.val)
    } else {
        // it exists, return it
        return map[node.val]    // if it exists, we just return it
    }

    node.neighbors.map(neighbor => {
        // make sure new node, i.e. map[node.val]
        // has cloned versions of these in its neighbors
        map[node.val].neighbors.push(traverse(neighbor, map))
    })

    return map[node.val]

    // return clone of node you passed it
    // and ensure all connections exist
}

/**
 * @param {Node} node
 * @return {Node}
 */

var cloneGraph = function(node) {
    if (!node) return null
    const map = {}
    
    // running map of visited nodes
    // for every node in neighbors list for a node
        // if we visited, don't descend recursively, index into map
    return traverse(node, map)
};