/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let count = 0
    let boundary = 0
    
    const numRows = grid.length
    const numCols = grid[0].length
    
    for (let c=0; c<numCols; c++) {
        // top row
        if (traverse(grid, 0, c)) boundary++
        // bottom row
        if (traverse(grid, numRows-1, c)) boundary++
    }
    
    for (let r=0; r<numRows; r++) {
        // left col
        if (traverse(grid, r, 0)) boundary++
        // right col
        if (traverse(grid, r, numCols-1)) boundary++
    }
    
    for (let r=0; r<numRows; r++) {
        for (let c=0; c<numCols; c++) {
            if (grid[r][c] === 1) {
                count++
            }
        }
    }
    
    return count
};

const traverse = (grid, r, c) => {
    if (!inBounds(grid, r, c)) return false
    if (grid[r][c] !== 1) return false
    
    grid[r][c] = -1
    
    const deltas = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]
    
    for (const delta of deltas) {
        const [dr, dc] = delta
        traverse(grid, r+dr, c+dc)
    }
    
    return true
}

const inBounds = (grid, r, c) => {
    const rInBounds = 0 <= r && r < grid.length
    const cInBounds = 0 <= c && c < grid[0].length
    
    return rInBounds && cInBounds
}

/*
    binaryMatrix m x n
    0 = sea, 1 = land
    
    move consists of walking from 1 land to another
        up, down, left, right
    
    return number of land cells in grid
*/