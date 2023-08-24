/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const numRows = grid.length
    const numCols = grid[0].length
    let count = 0
    const visited = new Set()
    
    for (let r=0; r<numRows; r++) {
        for (let c=0; c<numCols; c++) {
            if (explore(grid, r, c, visited)) count++
        }
    }
    
    return count
};

const explore = (grid, r, c, visited) => {
    if (!inBounds(grid, r, c)) return false
    if (grid[r][c] === '0') return false
    
    const pos = r+','+c
    if (visited.has(pos)) return false
    visited.add(pos)
    
    const deltas = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    for (let delta of deltas) {
        let [dc, dr] = delta
        explore(grid, r+dr, c+dc, visited)
    }
    
    return true
}

const inBounds = (grid, r, c) => {
    const rib = 0 <= r && r < grid.length
    const cib = 0 <= c && c < grid[0].length
    
    return rib && cib
}