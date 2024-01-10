/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */

/*
    'abcd'
    a, ab, abc, abcd
    b, bc, bcd
    c, cd
    d

    ~(n^2 + n) / 2
    ~ O(n^2)
*/

var longestValidSubstring = function(word, forbidden) {
    let longest = 0
    let n = word.length
    const set = new Set(forbidden)
    let right = n-1
    
    for (let left = n-1; left>=0; left--) {
        let substr = ''
        
        for (let k=left; k < Math.min(left+10, right+1); k++) {
            substr += word[k]
            
            if (set.has(substr)) {
                right = k - 1
                break
            }
        }
        
        longest = Math.max(longest, right-left+1)
    }
    
    return longest
    
//     let longest = 0
//     const hash = {}
    
//     for (const word of forbidden) hash[word] = false
    
//     let l = 0
//     let r = 0
    
//     while (r < word.length) {
//         let substr = word.slice(l, r+1)
        
//         if (substr in hash) {
//             if (hash[substr]) {     // valid substr, continue j
//                 r++
//             } else {                // invalid substr
//                 if (l === r) {
//                     l++
//                     r++
//                 } else {
//                     l++
//                 }
//             }
//         } else {      // we haven't seen this substr yet, is it valid?
//             hash[substr] = true
            
//             for (let word of forbidden) {
//                 if (substr.includes(word)) {
//                     hash[substr] = false
//                     break
//                 }
//             }
            
//             if (hash[substr]) longest = Math.max(longest, r-l+1)
//         }
        
//     }
    
//     return longest
    
    // length variable
    
    // sliding window with 2 pointers
    /*
        keep walking j so long as substring isn't contained in forbidden
        
    'tcode'
    !set.has(substr)
    
    in our hash, cache every substr possible that we've seen
    the value maps to valid/invalid
    
    leetcode
    i
     j
          
    */
};

// input: word, forbidden[]
// valid if substr isn't in forbidden
// return LENGTH of longest valid substr of word
