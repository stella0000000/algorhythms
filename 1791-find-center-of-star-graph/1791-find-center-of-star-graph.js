/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const set = new Set()
    
    for (let edge of edges) {
        const [nodeA, nodeB] = edge
        
        if (set.has(nodeA)) return nodeA
        if (set.has(nodeB)) return nodeB
        
        set.add(nodeA)
        set.add(nodeB)
    }
};

// center is node with most edges surrounding it