/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = (s, wordDict) => {
    let q = [0]
    let seen = {}

    for (const start of q) {
        if (start === s.length) return true

        for (const word of wordDict) {
            const end = start + word.length
            if (seen[end]) continue
            if (s.slice(start).startsWith(word)) {
                seen[end] = true
                q.push(end)
            }
        }
    }

    return false;
}


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