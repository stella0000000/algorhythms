const allPathsSourceTarget = (graph) => {
  // directed acyclic graph
    const allPaths = []
    findPaths(0, graph, allPaths, [])
    return allPaths
}

const findPaths = (node, graph, allPaths, currPaths) => {
    currPaths.push(node)
    
    if (node === graph.length-1) {
        allPaths.push([...currPaths])
        return
    }
    
    for (let neighbor of graph[node]) {
        findPaths(neighbor, graph, allPaths, [...currPaths])
    }
    
    return
}

























// const allPathsSourceTarget = (graph) => {
//   // directed acyclic graph
//     const allPaths = []
//     findPaths(0, graph, allPaths, [])
//     return allPaths
// }

// const findPaths = (currNode, graph, allPaths, currPaths) => {
//     currPaths.push(currNode)

//     if (currNode === graph.length-1) {
//         return allPaths.push(currPaths)
//     }

//     for (let neighbor of graph[currNode]) {
//         findPaths(neighbor, graph, allPaths, [...currPaths])
//     }

//     return allPaths
// }