/**
 * @param {number} n
 * @return {string[][]}
 */
// place n queens on an n x n chessboard
// such that no 2 queens attack each other
// return distinct solns any order

const isValid = (board, r, c) => {
    const n = board.length
    // r, c is pos last added Q
    // is it a valid pos for curr board state
    // array of arrays

    // row has 1 Q
    // don't need to check col bc we go col by col, guaranteed only 1
    // diags have 1 Q

    let tempr = r
    let tempc = c

    // check row
    while (c > 0) {
        c--
        if (board[r][c] === 'Q') return false
    }
    c = tempc

    // posDiag slope of prev visited quad (i.e. no c++)
    // don't count curr r, c, bc we already have a Q
    while (c > 0 && r < n-1) {
        c--
        r++
        if (board[r][c] === 'Q') return false  // if we find another Q, immediately false
    }
    r = tempr
    c = tempc

    // negDiag slope of prev visited quad (i.e. no c++)
    while (c > 0 && r > 0) {
        c--
        r--
        if (board[r][c] === 'Q') return false
    }

    return true
}

const solveNQueens = (n) => {
    // isValidPos helper
    // check no Q in r, +diag, -diag
    const board = new Array(n).fill('.').map(row => new Array(n).fill('.'))
    const res = []
    
    // note to self + martin:
        // valid board when Q successfully placed in last col bc going col x col
        // means prev Q's are valid

    // place a (potential) queen at a cell
        // place a Q @ r, c
            // if valid placement
                // col++
            // invalid placement
                // 1. remove Q @ r, c
                // 2. row++
                // 3. if no rows left, c--, r = prevR, repeat from step 1

    const solver = (r, c) => {
        // base case
        if (c === n) { // when we are @ n, we placed one at n-1
            let formatted = format(board)
            res.push(formatted)
            return
        }
        
        // place a queen
        //console.log(board, { r, c })
        while (r < n) {
            console.log({ r, c })
            board[r][c] = 'Q'
            // check validity
            if (isValid(board, r, c)) {
                solver(0, c+1)   // go back to row 0!, next col
            } 
            // remove current queen (it's not valid)
            // backtrack
            board[r][c] = "."
            r++
        }
        return        
    }
    
    solver(0, 0)
    return res
}

const format = (board) => {
    const formatted = []
    for (const row of board) formatted.push(row.join(''))
    return formatted
}

// const solveNQueens = (n) => {
//     const col = new Set()
//     const posDiag = new Set()
//     const negDiag = new Set()
    
//     const res = []
//     const board = Array(n).fill().map(() => Array(n).fill('.'))
//     console.log(board)
    
//     const backtrack = (r) => {
//         // no more rows
//         if (r === n) {
//             res.push(formatBoard([...board]))
//             return
//         }
        
//         for (let c=0; c<n; c++) {
//             if (col.has(c) || posDiag.has(r+c) || negDiag.has(r-c)) {
//                 continue
//             }
            
//             col.add(c)
//             posDiag.add(r+c)
//             negDiag.add(r-c)
            
//             board[r][c] = 'Q'
            
//             backtrack(r+1)
            
//             // undo for next iteration
//             col.remove(c)
//             posDiag.remove(r+c)
//             negDiag.remove(r-c)
//             board[r][c] = '.'
//         }
        
//     }
    
//     return res
// }

// // var solveNQueens = function(n) {
// //     // global result
// //     const res = []
    
// //     const dfs = (i, n, slate) => {
// //         // backtracking case
// //         let lastQ = i-1
        
// //         for (let prevQ=0; prevQ<lastQ; prevQ++) {
// //             // if col conflict
// //             if (slate[prevQ] === slate[lastQ]) return
// //             // if diagonol conflict
// //             let rowDiff = Math.abs(prevQ - lastQ)
// //             let colDiff = Math.abs(slate[prevQ] - slate[lastQ])
            
// //             if (rowDiff === colDiff) return            
// //         }
        
// //         // base case
// //         if (i === n) {
// //             res.push(slate.slice())
// //             return
// //         }
        
// //         // dfs recursive case
// //         for (let col=0; col < n; col++) {
// //             slate.push(col)
// //             dfs(i+1, n, slate)
// //             slate.pop()
// //         }
// //     }
    
// //     dfs(0, n, [])
    
// //     return res.map(board => formatBoard(board))
// // }

// const formatBoard = (board) => {
//     let res = []
    
//     for (let col=0; col<board.length; col++) {
//         let newRow = new Array(board.length).fill('.')
//         newRow[board[col]] = 'Q'
//         res.push(newRow.join(''))
//     }
//     return res
// }