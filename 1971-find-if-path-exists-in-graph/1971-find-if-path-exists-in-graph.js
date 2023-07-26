/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// undirected graph
// n vertices [0:n-1]
// return: if valid path exists from source to dest


var validPath = function(n, edges, source, destination) {
    const graph = buildGraph(n, edges)
    const visited = new Set()
    
    return traverse(source, graph, destination, visited)
};

const traverse = (node, graph, destination, visited) => {
    if (node === destination) return true
    // if (visited.has(node)) return false
    
    visited.add(node)
    
    for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
            if (traverse(neighbor, graph, destination, visited)) return true
        }
    }
    
    return false
}

const buildGraph = (n, edges) => {
    const graph = {}
    
    for (let i=0; i<n; i++) graph[i] = []
    
    for (let edge of edges) {
        let [a, b] = edge
        graph[a].push(b)
        graph[b].push(a)
    }
    
    return graph
}

// buildGraph
    // change edges list to adjacency list
    // why? key: nodeA, values: nodeA's neighbors
        // access neighbors for each node in constant time
            // with edges[] I need to loop through every time
    // O(len(e)) => linear to build

// traversal
    // visited set (no cycles/infinite loops)
    // if (node === destination) return true
    // if not, continue traversing neighbors