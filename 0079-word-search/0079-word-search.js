/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// m x n [ [], [], ... ]
// return => word exists in grid?

// recursive DFS
// exist()
    // loop through row, col
        // call traverse()
            // true if length of word we built is the length of word
// return false

// traverse
    // check length === word.length return true
    // check in bounds
    // loop if 

// we want the cell
// bc can have letter multiple times in the grid

const exist = (board, word) => {
    for (let r=0; r<board.length; r++) {
        for (let c=0; c<board[0].length; c++) {
            if (traverse(board, word, r, c, 0)) return true
        }
    }
    
    return false
}

const traverse = (board, word, r, c, i) => {
    if (i === word.length) return true
    
    const rowInBounds = r < board.length && 0 <= r
    const colInBounds = c < board[0].length && 0 <= c
    if (!rowInBounds || !colInBounds) return false
    
    if (board[r][c] === word[i]) {
        let temp = board[r][c]
        board[r][c] = '#'
        
        if (
            traverse(board, word, r+1, c, i+1) ||
            traverse(board, word, r-1, c, i+1) ||
            traverse(board, word, r, c+1, i+1) ||
            traverse(board, word, r, c-1, i+1)
        ) return true
        
        
        board[r][c] = temp
    }
}


// const exist = (board, word) => {
//     for (let r=0; r<board.length; r++) {
//         for (let c=0; c<board[0].length; c++) {
//             if (traverse(board, word, r, c, 0)) return true
//         }
//     }

//     return false
// }

// const traverse = (board, word, r, c, currLength) => {
//     if (currLength === word.length) return true

//     const rowInBounds = 0 <= r && r < board.length
//     const colInBounds = 0 <= c && c < board[0].length
//     if (!rowInBounds || !colInBounds) return false

//     if (board[r][c] === word[currLength]) {
//         let temp = board[r][c]
//         board[r][c] = '#'
        
//         if (traverse(board, word, r-1, c, currLength+1)
//             || traverse(board, word, r+1, c, currLength+1)
//             || traverse(board, word, r, c-1, currLength+1)
//             || traverse(board, word, r, c+1, currLength+1)) {
//                 return true
//             }
//         board[r][c] = temp
//     }
// }