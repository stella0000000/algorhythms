/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

/*

    0 index string + dictionary of words
    break s into one or more of non-overlapping substrings
        such that each are in dictionary
    return min # extra chars left if you break up s optimally
    
    s = leetscode, dictionary = leet, code, leetcode
    break up leet, code => leftover s = 1 char
*/

const minExtraChar = (s, dictionary) => {
    const n = s.length
    const dp = new Array(n).fill(0)
    
    // go up to n, for our array
    for (let i=1; i<n+1; i++) {
        dp[i] = dp[i-1] + 1
        
        for (const word of dictionary) {
            if (i >= word.length) {
                let substr = s.slice(i-word.length, i)
                if (substr === word) {
                    dp[i] = Math.min(dp[i], dp[i-word.length])
                }
            }
        }
    }
    
    
    return dp[n]
}

// var minExtraChar = function (s, dictionary) {
//     const n = s.length
//     const words = new Set(dictionary) // O(1) lookup
//     const dp = new Array(n).fill(0)
//     dp[0] = 0
    
//     for (let i=1; i<n+1; i++) {
//         dp[i] = dp[i-1] + 1
//         // leetscode
//         for (const word of words) {
//             if (i >= word.length) {
//                 let substr = s.slice(i-word.length, i)
                
//                 if (substr === word) {
//                     dp[i] = Math.min(dp[i], dp[i - word.length])
//                 }
//             }
//         }
//     }
    
//     return dp[n]
// }
    
    /* bottom up dynamic programming
        init dp table vals correspond with min num extra chars at each pos
        start from base case with bottom up
            start = n
            iterate backward from n-1
            consider each pos as potential starting point for substr
            update table accordingly
        return val at first pos is min num extra chars left after breaking optimally
    */


// break given string, s, length n
// into non-overlapping substrings
// each substring is present in dictionary
// minimize extra chars left over after string is broken optimally
// max num chars possibly left over is n
// where we find no match in dictionary + all chars must be removed

// TOP DOWN
// memo takes startIdx as key param
// index represents curr position of str, where we are considering adding chars
// to form a valid word
// dp returns min number of extra chars to form valid concat from startIdx

// if we've reached the end, return 0 => no extra chars needed
// if start !== end, consider 2 possibilities
    // count curr char at start as extra char, recursively calling dp with start++
        // res+1, as we are counting curr char as extra
    // iterate over all possible end from start to end of string
//         // 

// var minExtraChar = function (s, dictionary) {
//     const dp = new Array(s.length).fill(Infinity)
//     dp[0] = 0 // filler

//     for (let i = 1; i <= s.length; ++i) {
//         dp[i] = dp[i - 1] + 1

//         for (const word of dictionary){
//             if (i >= word.length && s.slice(i - word.length, i) === word){
//                 dp[i] = Math.min(dp[i], dp[i - word.length])
//             }
//         }
//     }

//     return dp[s.length]
// }