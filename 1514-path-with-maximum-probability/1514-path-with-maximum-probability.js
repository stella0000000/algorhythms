/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

// var maxProbability = function (n, edges, succProb, start, end) {
//     const adjacencyList = getAdjacencyList(edges, succProb, n)
//     const visited = Array(n).fill(false)
//     const queue = new PriorityQueue({
//         compare: (a, b) => b[1] - a[1]
//     })

//     queue.enqueue([start, 1])

//     while (!queue.isEmpty()) {
//         const [vertex, totalProb] = queue.dequeue()
//         if (visited[vertex]) continue
//         if (vertex === end) return totalProb

//         visited[vertex] = true

//         for (const [neighbor, prob] of adjacencyList[vertex]) {
//             queue.enqueue([neighbor, prob * totalProb])
//         }
//     }

//     return 0
// };

// function getAdjacencyList(edges, succProb, n) {
//     const list = Array.from({ length: n }, () => [])

//     for (let i = 0; i < edges.length; i++) {
//         const [a, b] = edges[i]

//         list[a].push([b, succProb[i]])
//         list[b].push([a, succProb[i]])
//     }

//     return list
// }

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
    
    const queue = new PriorityQueue({
        compare: (a, b) => b[0] - a[0]
    })
    
    queue.enqueue([probMap[start], start])

    while (!queue.isEmpty()) {
        const [prob, node] = queue.dequeue()
        
        if (!visited.has(node)) {
            visited.add(node)
            probMap[node] = Math.max(prob, probMap[node])
            if (node === end) return probMap[node]
            
            if (graph[node]) {
                for (let neighbor of graph[node]) {
                    const [nodeB, probToNodeB] = neighbor
                    let pathProb = prob * probToNodeB
                    queue.enqueue([pathProb, nodeB])
                }
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