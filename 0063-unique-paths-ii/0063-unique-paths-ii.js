/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    const numRows = obstacleGrid.length
    const numCols = obstacleGrid[0].length
    
    return explore(obstacleGrid, 0, 0, numRows, numCols, memo={})
};

const explore = (obstacleGrid, row, col, numRows, numCols, memo) => {
    const rowInBounds = row >= 0 && row < numRows
    const colInBounds = col >= 0 && col < numCols
    if (!rowInBounds || !colInBounds) return 0
    
    const pos = row + ',' + col
    if (pos in memo) return memo[pos]
    
    if (obstacleGrid[row][col] === 1) return 0
    if (row === numRows-1 && col === numCols-1) return 1
    
    let right = explore(obstacleGrid, row+1, col, numRows, numCols, memo)
    let down = explore(obstacleGrid, row, col+1, numRows, numCols, memo)
    
    memo[pos] = right + down
    
    return memo[pos]
}