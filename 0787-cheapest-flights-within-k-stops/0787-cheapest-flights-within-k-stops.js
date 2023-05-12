/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

const findCheapestPrice = (n, flights, src, dst, K) => {    
    // 1. Build Graph
    const graph = buildGraph(flights, dst)
    if (graph === null) return -1
    
    // 2. BFS but with optimizations (a) and (b)
    let queue = [{ from: src, costSoFar: 0, stopsLeft: K + 1 }]; // (1)
    let cheapest = Infinity
    
    while(queue.length) {
        let { from, costSoFar, stopsLeft } = queue.shift();
        
        if (!graph[from]) continue; // no flights from this stop
        
        // optimization (a) - simply don't continue searching this path if we've exhausted K stops
        if(stopsLeft <= 0) continue
        // optimization (b) - simply don't continue searching if we've already found a cheaper cost already
        if (cheapest !== Infinity && costSoFar > cheapest) continue
        
        for (let [nextStop, cost] of Object.entries(graph[from])) {
            if(nextStop == dst) {
                cheapest = Math.min(cheapest, costSoFar + cost)
            } else {
                queue.push({ from: nextStop, costSoFar: costSoFar + cost, stopsLeft: stopsLeft - 1 });
            }
        }
    }
    
    return cheapest === Infinity ? -1 : cheapest
}

const buildGraph = (flights, dst) => {
    const graph = {};
    
    let hasPathToDest = false;
    
    for(const [from, to, cost] of flights) {
        if(!(from in graph)) graph[from] = {};
        graph[from] = { ...graph[from], [to]: cost };
        
        if(to === dst) hasPathToDest = true;
    }
    
    return hasPathToDest ? graph : null;
}

// n cities connected by some number of flights
// return cheapest price from src to dst with @ most k stops
// else return -1

// var findCheapestPrice = function(n, flights, src, dst, k) {
//     const graph = buildGraph(flights)
//     let price = 0
//     let stops = k
    
//     const queue = [ graph[src] ]
    
//     while (queue.length) {
//         const obj = queue.shift()
//         const nextCity = Object.keys(obj)[0]
//         const ticketPrice = obj[nextCity]
        
//         price += ticketPrice
        
//         stops--
//         if (nextCity === dst && stops === 0) return price

//         for (let neighbor in graph[nextCity]) {
//              queue.push({ [neighbor]: graph[nextCity][neighbor] })
//         }
//     }
    
//     return -1
// }

// const buildGraph = (flights) => {
//     const graph = {}
    
//     for (let flight of flights) {
//         const [cityA, cityB, price] = flight
//         // city0: { city1: 100, city2: 500 }
        
//         if (!(cityA in graph)) graph[cityA] = {}
//         if (!(cityB in graph[cityA])) graph[cityA][cityB] = price
//     }
    
//     return graph
// }