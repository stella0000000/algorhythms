/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */

// undirected, unrooted tree => n nodes
// traverse all trips to build frequency map for graph
// then do stuff w freq map

const minimumTotalPrice = (n, edges, price, trips) => {
    const graph = buildGraph(n, edges)
    const freq = {}
    for (let i=0; i<n; i++) freq[i] = 0
    
    for (let trip of trips) {
        const [src, dst] = trip
        const visited = new Set()
        const currPath = [src]
    
        dfs(src, dst, graph, currPath, visited)
        // dfs(src, dst, graph, visited)
        // currPath.push(src)
        
        for (let node of currPath) {
            if (!(node in freq)) freq[node] = 0
            freq[node]++
        }
    }
    
    const visited = new Set()
    
    let res = halfyDfs(0, freq, price, visited, graph)
    return Math.min(res.half, res.notHalf)
}

function halfyDfs(node, freq, price, visited, graph) {
    if (visited.has(String(node))) return { half: 0, notHalf: 0 }
    visited.add(String(node))

    let half = (price[node] / 2) * freq[node]
    let notHalf = price[node] * freq[node]

    for (let neighbor of graph[node]) {
        let res = halfyDfs(neighbor, freq, price, visited, graph)
        half  += res.notHalf
        notHalf += Math.min(res.notHalf, res.half)
    }

    return { half, notHalf }
}

// what do you want to do
// when do i return true / false
// where do i push (either as side effect)

// const dfs = (src, dst, graph, visited) => {
//     if (src === dst) return [dst]
//     if (visited.has(String(src))) return []
//     visited.add(String(src))
    
//     for (let neighbor of graph[src]) {
//         let path = dfs(neighbor, dst, graph, visited)
//         if (path) path.push(src)
//     }
    
//     return path
// }

const dfs = (src, dst, graph, currPath, visited) => {
    if (src === dst) return true //
    if (visited.has(String(src))) return false //
    visited.add(String(src))  //
    
    for (let neighbor of graph[src]) {
        if (dfs(neighbor, dst, graph, currPath, visited)) {
            currPath.push(neighbor)
            return true
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