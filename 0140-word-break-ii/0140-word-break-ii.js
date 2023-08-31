/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    if (s == "") return []
    let memo = {}
    
    const helper = (s) => {
        if (s in memo) return memo[s] 
        
        let ans = []
        for (let word of wordDict) {
            if (!s.startsWith(word)) continue // base case
            if (word.length == s.length) ans.push(word) // base case
            
            else {
                let resultOfRest = helper(s.substr(word.length)) 
                for (let v of resultOfRest) {
                    v = word + ' ' + v
                    ans.push(v)
                }
            }
        }
        
        memo[s] = ans
        return ans 
    }
    
    return helper(s)
}