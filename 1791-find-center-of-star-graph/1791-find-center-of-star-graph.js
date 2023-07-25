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
    // build graph
//     const edgeCount = {}
    
//     for (let edge of edges) {
//         const [nodeA, nodeB] = edge
//         if (!(nodeA in edgeCount)) edgeCount[nodeA] = 0
//         if (!(nodeB in edgeCount)) edgeCount[nodeB] = 0
        
//         edgeCount[nodeA]++
//         edgeCount[nodeB]++
//     }
    
//     return Object.keys(edgeCount).reduce((a, b) => edgeCount[a] > edgeCount[b] ? a : b)
};

// center is node with most edges surrounding it