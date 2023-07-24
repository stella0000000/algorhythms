/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// n nodes: 1 to n
// times: travel times as directed edges
    // (source, target, delta t)
// send signal from node k
// return: min time it takes from all n nodes to receive the signal
// impossible ? -1

var networkDelayTime = function(times, n, k) {
    // initialize distance map => set all nodes' dist. to Inf
    // initialize queue
    // DFS
    
    const distances = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    distances[0] = 0 // no 0th node
    distances[k] = 0 // source node
    
    const travels = new Array(n+1).fill().map(() => [])
    
    times.forEach(t => {
        travels[t[0]].push([t[1], t[2]])
    })
    
    const queueNode = [k]
    
    while(queueNode.length > 0){
        const topNode = queueNode.shift()
        
        travels[topNode].forEach(c => {
            if (distances[topNode]+c[1] < distances[c[0]]) {
                distances[c[0]] = distances[topNode]+c[1]
                queueNode.push(c[0])
            }
        })
    }
    const max = Math.max(...distances)
    
    if (max === Number.MAX_SAFE_INTEGER) return -1

    return max
};

// directed
// how to track shortest route to any given node?
    // visited set

// dijkstra shortest path for given node and all given nodes