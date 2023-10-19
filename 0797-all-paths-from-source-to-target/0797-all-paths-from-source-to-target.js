const allPathsSourceTarget = (graph) => {
    // global all paths arr to return
    const allPaths = []
    
    // dfs from source node 0
    findPaths(0, graph, allPaths, [])
    
    // returnz all the pathz
    return allPaths
}

const findPaths = (node, graph, allPaths, currPath) => {
    // push the node in currPath[] we are pathing
    currPath.push(node)
    
    // if we are at final node
    // i.e. node = n-1
    // we can add currPath to all paths and return
    // from this recursive call
    if (node === graph.length-1) {
        allPaths.push(currPath)
        return
    }
    
    // now we need to traverse neighbors from
    // curr node
    // clone currPath for diverging recursive calls
    for (const neighbor of graph[node]) {
        findPaths(neighbor, graph, allPaths, [...currPath])
    }
    
    // return
}







// const allPathsSourceTarget = (graph) => {
//   // directed acyclic graph
//     const allPaths = []
//     findPaths(0, graph, allPaths, [])
//     return allPaths
// }

// const findPaths = (node, graph, allPaths, currPath) => {
//     currPaths.push(node)
    
//     if (node === graph.length-1) {
//         allPaths.push([...currPath])
//         return
//     }
    
//     for (let neighbor of graph[node]) {
//         findPaths(neighbor, graph, allPaths, [...currPath])
//     }
    
//     return
// }

























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