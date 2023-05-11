/**
 * @param {number} n
 * @return {string[][]}
 */

/*
[
  ".Q..",
  "...Q",
  "Q...",
  "..Q."
]
*/
var solveNQueens = function(n) {
    // global result
    const res = []
    
    const dfs = (i, n, slate) => {
        // backtracking case
        let lastQ = i-1
        
        for (let prevQ=0; prevQ<lastQ; prevQ++) {
            // if col conflict
            if (slate[prevQ] === slate[lastQ]) return
            // if diagonol conflict
            let rowDiff = Math.abs(prevQ - lastQ)
            let colDiff = Math.abs(slate[prevQ] - slate[lastQ])
            
            if (rowDiff === colDiff) return            
        }
        
        // base case
        if (i === n) {
            res.push(slate.slice())
            return
        }
        
        // dfs recursive case
        for (let col=0; col < n; col++) {
            slate.push(col)
            dfs(i+1, n, slate)
            slate.pop()
        }
    }
    
    dfs(0, n, [])
    
    return res.map(board => formatBoard(board))
}

const formatBoard = (board) => {
    let res = []
    
    for (let col=0; col<board.length; col++) {
        let newRow = new Array(board.length).fill('.')
        newRow[board[col]] = 'Q'
        res.push(newRow.join(''))
    }
    return res
}