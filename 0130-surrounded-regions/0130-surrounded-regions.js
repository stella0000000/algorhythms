/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// don't flip any 'O' group anchored at an edge

var solve = function(board) {
    const numRows = board.length
    const numCols = board[0].length
    
    for (let r=0; r<numRows; r++) flip(board, r, 0)
    for (let c=0; c<numCols; c++) flip(board, 0, c)
    for (let r=0; r<numRows; r++) flip(board, r, numCols-1)
    for (let c=0; c<numCols; c++) flip(board, numRows-1, c)
    
    for (let r=0; r<numRows; r++) {
        for (let c=0; c<numCols; c++) {
            if (board[r][c] === '#') board[r][c] = 'O'
            else if (board[r][c] === 'O') board[r][c] = 'X'
        }
    }
    
    return board
}

const flip = (board, r, c) => {
    const rInBounds = r >= 0 && r < board.length
    const cInBounds = c >= 0 && c < board[0].length
    
    if (!rInBounds || !cInBounds) return
    if (board[r][c] !== 'O') return
    
    board[r][c] = '#'

    flip(board, r+1, c)
    flip(board, r-1, c)
    flip(board, r, c+1)
    flip(board, r, c-1)
}