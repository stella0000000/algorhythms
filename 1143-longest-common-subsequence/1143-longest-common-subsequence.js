/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

const longestCommonSubsequence = (a, b) => {
    const matrix = Array(a.length + 1).fill().map(() => Array(b.length + 1).fill(0));
    for(let i = 1; i < a.length + 1; i++) {
        for(let j = 1; j < b.length + 1; j++) {
            if(a[i-1] === b[j-1]) {
                matrix[i][j] = 1 + matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
            }
        }
    }
    return matrix[a.length][b.length];
}
// var longestCommonSubsequence = function(text1, text2, memo={}) {
//     const key = text1+text2
//     if (key in memo) return memo[key]
//     if (text1.length === 0 || text2.length === 0) return 0
    
//     let both = 0
//     let first = 0
//     let second = 0
    
//     if (commonFirstLetter(text1, text2)) {
//         both = longestCommonSubsequence(text1.slice(1), text2.slice(1), memo) + 1
//     } else {
//         first = longestCommonSubsequence(text1.slice(1), text2, memo)
//         second = longestCommonSubsequence(text1, text2.slice(1), memo)
//     }
    
//     memo[key] = both + Math.max(first, second)
    
//     return memo[key]
// }

// const commonFirstLetter = (text1, text2) => {
//     return text1[0] === text2[0]
// }