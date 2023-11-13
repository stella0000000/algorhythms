/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// string, s
// dictinary of strings, wordDict
// true if s can be segmented with spaces
// else false


// Dynamic Programming
const wordBreak = (s, wordDict) => {
    const dp = new Array(s.length).fill(false)
    // dp[i] means we can create a word from i-word.length to i
    
    for (let i=0; i<s.length; i++) {
        for (const word of wordDict) {
            // out of bounds
            if (i < word.length-1) continue
            
            if (i === word.length-1 || dp[i-word.length]) {
                let substr = s.slice(i-word.length+1, i+1)
                
                if (substr === word) {
                    dp[i] = true
                    break
                }
            }
        }
    }
    console.log(dp)
    return dp[s.length-1]
}




/*
// BFS
const wordBreak = (s, wordDict) => {
    if (!s.length || !wordDict.length) return false
    const dict = new Set(wordDict)
    const q = [0]
    const visited = new Set()
    
    while (q.length) {
        const start = q.shift()
        
        if (!visited.has(start)) {
            visited.add(start)
            
            for (let end=start+1; end<=s.length; end++) {
                const substr = s.slice(start, end)

                if (dict.has(substr)) {
                    if (end === s.length) return true
                    q.push(end)
                }
            }
        }
    }
    
    return false
}
*/


// input string + object of words
// return if the string can be formed with the words in dictionary

// decision tree
// cache
// DP (bottom up approach)

// const wordBreak = (s, wordDict) => {
//     // DYNAMIC PROGRAMMING
//     if (!wordDict || wordDict.length === 0) return false
//     const set = new Set(wordDict)
    
//     const dp = new Array(s.length+1).fill(false)
//     dp[0] = true
    
//     for (let end=1; end<=s.length; end++) {
//         for (let start=0; start<end; start++) {
//             const w = s.slice(start, end)
            
//             if (dp[start] === true && set.has(w)) {
//                 dp[end] = true
//                 break
//             }
//         }
//     }
    
//     return dp[s.length]
// }


// const wordBreak = (s, wordDict) => {
//   const set = new Set(wordDict)

//   // s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
//   // after 'cats' and 'ca', it will become 'andog', 'tsandog'
//   // for 'tsandog', after 'ts'
//   // it will become 'andog' again, visited set here is for memoization

//     const visited = new Set() // memo
//     const queue = [0]

//     while (queue.length) {
//         const start = queue.shift()

//         if (!visited.has(start)) {
//             for (let end = start + 1; end <= s.length; end++) {
//                 if (set.has(s.slice(start, end))) { // dictionary
//                     if (end === s.length) return true
//                     queue.push(end) // end becomes new start
//                 }
//             }

//             visited.add(start)
//         }
//       }

//       return false
// }


// const wordBreak = (s, wordDict) => {
//     // base case
//     if (s.length === 0) return true
    
//     // branching
//     for (let word of wordDict) {
//         if (matchesFront(s, word)) {
//             // recurse removing the word from the front of s
//             if (wordBreak(s.slice(word.length), wordDict)) {
//                 return true
//             }
//         }
//     }
    
//     return false
// }

// const matchesFront = (str1, str2) => {
//     let len = str2.length
//     return str1.slice(0, len) === str2
// }