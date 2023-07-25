/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

// undirected weighted graph
// n-nodes (0 indexed)
// edges[i] = [a, b], probability of success succProb[i]

// given: 2 nodes - start, end
// return: max prob of success to go from start to end (return succProb)
// if none, return 0

// probabilities are multiplied

var maxProbability = function(n, edges, succProb, start, end) {
    // visited set
        // we don't want to revisit nodes
        // guaranteed min thing
        // inf. cycle
    // probability map
        // indicies align with the node
        // values correspond with MAX prob found so far to that node
        // initialize with 0
    // queue
        // ideally max heap priority queue
            // sorts @ insertion
    
    const graph = buildGraph(edges, succProb)
    const visited = new Set()
    const probMap = new Array(n).fill(0)
    probMap[start] = 1 // 100% getting from the start to the start
    
    const queue = [ [probMap[start], start] ]
    
    // queue has stuff, and we haven't visited all nodes
    // while (queue.length && visited.size < n) {
    while (queue.length && !visited.has(end)) {
        // const [prob, node] = queue.reduce((a, b) => a[0] > b[0] ? a : b)
        // const idx = queue.indexOf([prob, node])
        // queue.splice(idx, 1)
        const [prob, node] = queue.shift()
        
        if (!visited.has(node)) {
            visited.add(node)
            probMap[node] = Math.max(prob, probMap[node])
            
            if (graph[node]) {
                for (let neighbor of graph[node]) {
                    const [nodeB, probToNodeB] = neighbor
                    let pathProb = prob * probToNodeB
                    queue.push([pathProb, nodeB])
                }

                // sort after we enqueue all neighbors
                // largest prob first
                queue.sort((a, b) => a[0] > b[0] ? -1 : 1)
            }
        }
    }

    return probMap[end]
};

const buildGraph = (edges, succProb) => {
    const graph = {}
    
    for (let i=0; i< edges.length; i++) {
        const [a, b] = edges[i]
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        
        graph[a].push([b, succProb[i]])
        graph[b].push([a, succProb[i]])
    }
    
    return graph
}