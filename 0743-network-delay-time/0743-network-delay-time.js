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

var networkDelayTime = function(times, N, K) {
    // initialize visited set
    // initialize distance map => set all nodes' dist. to Inf
    // initialize queue
    // 
    
    const tt = new Array(N + 1).fill(Infinity);
    tt[0] = 0;
    tt[K] = 0;

    let flag = true;

      while (flag) {
        flag = false;
          console.log({ tt })
        times.forEach(([u, v, w]) => {
          if (tt[u] !== Infinity && tt[v] > tt[u] + w) {
            tt[v] = tt[u] + w;
            flag = true;
          }
        });
      }

      const res = Math.max(...tt);

    // console.log({ tt })
  return res === Infinity ? -1 : res;
};

// directed
// how to track shortest route to any given node?
    // visited set

// dijkstra shortest path for given node and all given nodes