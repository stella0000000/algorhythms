/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// return length of longest common subsequence
// if none, return 0

// subseq is new str from original with some chars deleted, maintain order

const longestCommonSubsequence = (a, b) => {
    const m = a.length
    const n = b.length
    
    const dp = initDp(a, b)
    fillDp(dp, a, b)
    
    return dp[0][0]
}

const initDp = (a, b) => {
    const dp = []
    for (let i=0; i<=a.length; i++) {
        dp[i] = new Array(b.length+1).fill(0)
    }
    return dp
}

const fillDp = (dp, a, b) => {
    // iterate 2d grid in REVERSE
    
    for (let i=a.length-1; i>=0; i--) {
        for (let j=b.length-1; j>=0; j--) {
            if (a[i] === b[j]) {    // match
                dp[i][j] = 1 + dp[i+1][j+1]
            } else {
                const down = dp[i+1][j]
                const right = dp[i][j+1]
                dp[i][j] = Math.max(down, right)
            }
        }
    }
}

/*
  x = longest between bc + abcd
  travel diagonally to look at remainder of strings
  from cell go right or down if chars not equal
    i.e. cell[i][j] = Math.max(cell[i+1][j], cell[i][j+1])\
  when chars match, add 1 and put in prev cell - bubble up
  
  
    a b c
  a   x
  b
  c
  d



*/

// const longestCommonSubsequence = (a, b) => {
//     const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
//     for(let i = 1; i < a.length + 1; i++) {
//         for(let j = 1; j < b.length + 1; j++) {
//             if(a[i-1] === b[j-1]) {
//                 matrix[i][j] = 1 + matrix[i-1][j-1];
//             } else {
//                 matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
//             }
//         }
//     }
//     return matrix[a.length][b.length];
// }

// var longestCommonSubsequence = function(text1, text2, memo={}) {
//     const key = text1+text2
//     if (key in memo) return memo[key]
//     if (text1.length === 0 || text2.length === 0) return 0
    
//     let both = 0
//     let first = 0
//     let second = 0
    
    // if (commonFirstLetter(text1, text2)) {
    //     both = longestCommonSubsequence(text1.slice(1), text2.slice(1), memo) + 1
    // } else {
//         first = longestCommonSubsequence(text1.slice(1), text2, memo)
//         second = longestCommonSubsequence(text1, text2.slice(1), memo)
//     }
    
//     memo[key] = both + Math.max(first, second)
    
//     return memo[key]
// }

// const commonFirstLetter = (text1, text2) => {
//     return text1[0] === text2[0]
// }