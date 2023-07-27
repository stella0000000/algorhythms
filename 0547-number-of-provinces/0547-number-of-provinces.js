/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let count = 0
    const visited = new Array(isConnected.length);
    
    for (let i = 0; i < visited.length; i++) {
        if (visited[i]) {
            continue;
        }
        
        count++;
        bfs(isConnected, visited, i);
    }
    
    return count;
};

function bfs(isConnected, visited, initCity) {
    const queue = [initCity];
    
    while (queue.length) {
        const city = queue.shift();
        
        visited[city] = true;
        
        for (let i = 0; i < visited.length; i++) {
            if (!visited[i] && isConnected[i][city]) {
                queue.push(i);
            }
        }
    }
}

// const buildGraph = (isConnected) => {
//     const graph = {}
    
//     for (let i=0;i<isConnected.length; i++) {
//         if (!(i in graph)) graph[i] = []
//         for (let j=0; j<isConnected[0].length, j++) {
//             if (i === j) continue
//             else {
                
//             }
//         }
//     }
// }

// n cities
// some connected
// if cityA is connected to cityB
// cityB connection to cityC
// cityA is indirectly connected to cityC

// province = group of directly or indirectly connected cities ONLY

// isConnected[][]
// i connected to j => directly


// visited count # of provinces
// 