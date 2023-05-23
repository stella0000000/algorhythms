/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */

// find connections
// return min of all edges in connected graph

const minScore = (n, roads) => {
    const graph = buildGraph(n, roads)
    let min = Infinity
    const visited = new Set([ 1 ])
    
    const stack = [ 1 ]
    
    while (stack.length) {
        let node = stack.pop()
        
        for (let neighbors of graph[node]) {
            let [ neighbor, dist ] = neighbors
            if (dist < min) min = dist
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                stack.push(neighbor)
            }
        }
    }
    
    return min
}

const buildGraph = (n, roads) => {
    const graph = {}
    
    for (let road of roads) {
        const [a, b, dist] = road
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push([ b, dist ])
        graph[b].push([ a, dist ])
    }
    
    return graph
}

// var minScore = function(n, roads) {
//     const connected = new Set()
    
//     for (let road of roads) {
//         if (road[0] === 1 || road[1] === n) {
//             connected.add(road[2])
//         }
//     }
    
//     return Math.min(...connected)
// }
