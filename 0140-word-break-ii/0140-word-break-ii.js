/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

/*
    input: s, wordDict
    return: add spaces in s to construct a sentence w valid dict words
        all possible sentences

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
    if (s === '') return []
    const memo = {}
    
    const dfs = (currStr) => {
        if (currStr in memo) return memo[currStr]
        const res = []
        
        for (let word of wordDict) {
            if (!currStr.startsWith(word)) {
                
            } else {
                const newStr = currStr.slice(word.length)
                const nextWords = dfs(newStr)
                
                if (!newStr.length && !nextWords.length) {
                    res.push(word)
                }
                
                for (let w of nextWords) {
                    w = word + ' ' + w
                    res.push(w)
                }
            }
        }
        
        memo[currStr] = res
        return res 
    }
    
    return dfs(s)
}