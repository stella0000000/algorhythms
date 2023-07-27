/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function (roads, seats) {
  const n = roads.length + 1;
  const graph = new Array(n + 1).fill().map((_) => []);

  for (const [v1, v2] of roads) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const ans = { val: 0 };
  dfs(ans, 0, -1, graph, seats);

  return ans.val;
};

function dfs(ans, curr, prev, graph, seats) {
  let people = 1;
  for (const next of graph[curr]) {
    if (next === prev) continue; // bc bidirectional
    people += dfs(ans, next, curr, graph, seats);
  }

  if (curr !== 0) ans.val += Math.ceil(people / seats);

  return people;
}


// build graph
// start from 0 and go outward bc same
// how long is each branch
// traverse DFS to 0, capital
// cumulative sum of liters, taken seats into account
//