/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

// explore all paths in DFS + memoization
    // splitting into smaller pieces
    // same subproblem for substrings
    // divide and conquer
    // want to reach an empty string
    // need to RETURN all the possible splits
    // a list of all the words to create on split
// memoization, exploring all paths through DFS, could be duplicates
// parse from left to right
// can we make a split

const wordBreak = (s, wordDict) => {
    if (s == "") return []
    
    // since we are employing DFS, we want to cache any duplicate subproblems
    const memo = {}
    
    const dfs = (s) => {
        if (s in memo) return memo[s] 
        
        let res = []
        for (let word of wordDict) {
            // base cases
            if (!s.startsWith(word)) continue
            if (word.length == s.length) res.push(word)
            
            else {
                let resultOfRest = dfs(s.slice(word.length)) 
                for (let v of resultOfRest) {
                    v = word + ' ' + v
                    res.push(v)
                }
            }
        }
        
        memo[s] = res
        return res 
    }
    
    return dfs(s)
}

// const wordBreak = (s, wordDict) => {
//     const arr = []
    
//     const go = (str, val) => {
//         if (str === '') {
//             arr.push(val.trim())
//             return
//         }
        
//         for (let word of wordDict) {
//             if (str.startsWith(word)) {
//                 go(str.slice(word.length), val + word + ' ');
//             }
//         }
//     }
    
//     go(s, '')
//     return arr
// }













// var wordBreak = function(s, wordDict) {
//     if (s.length === 0) return []
//     let memo = {}
    
//     const helper = (s) => {
//         if (s in memo) return memo[s] 
        
//         let ans = []
//         for (let word of wordDict) {
//             if (!s.startsWith(word)) continue // base case
//             if (word.length == s.length) ans.push(word) // base case
            
//             else {
//                 let resultOfRest = helper(s.substr(word.length)) 
//                 for (let v of resultOfRest) {
//                     v = word + ' ' + v
//                     ans.push(v)
//                 }
//             }
//         }
        
//         memo[s] = ans
//         return ans 
//     }
    
//     return helper(s)
// }