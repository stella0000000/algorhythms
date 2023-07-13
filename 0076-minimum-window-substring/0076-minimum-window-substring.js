/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// s.length = m
// t.length = n

// return min window substr of s
// s/t every char in t is included in window

const minWindow = (s, t) => {
    if (t.length > s.length) return '';
    
    const neededChars = {}; // hT
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    let substring = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        
        while (neededLength === 0) {
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            
            const leftChar = s[left];
            // If the leftChar in charMap is at exactly 0 before being 
            // incremented, we now need more leftChars so that its count
            // in charMap goes down to exactly 0
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            neededChars[leftChar]++;
            left++;
               
        }
        
        right++;
    }
    
    return substring;
}

// var minWindow = function(s, t) {
//     if (s.length < t.length) return ''
//     let minSubstr = s
    
//     let hT = hashy(t)
//     let hS = {}
    
//     let left = 0
//     let right = 0
    
//     // s = XYZBYAZATYUJKNGTY
//     // t = AB
//     // => AB
    
//     // expanding (right++) til we have all inclusive
//     // shrinking (left++) til we maintain all inclusive
    
//     // if s[right] is in hT
//         // add to hS
//         // check inclusivity
//             // if this is true = "save" the curr substr
//             // currSubstr = s.slice(left, right+1)
//         // increment left pointer
//     // if not, increment left+right pointer
    
    
//     while (!allInclusive(hS, hT)) {
//         if (s[right] in hT) add(s[right], hS)
//         right++
//     }

//     let currSubstr = s.slice(left, right)
//     if (currSubstr.length < minSubstr.length) minSubstr = currSubstr

//     while (!(s[left] in hS)) left++
    
//     // increment right til we hit a char in hT
//     expandRight(hS, hT, left, right, s, minSubstr)
    
//     return minSubstr
// };

// const contractLeft = (hs, ht, right, left, s, minSubstr) => {
//     while (overIncluded(s[left], hs, ht)) {
//         hs[s[left]]--
//         left++
//     }
    
//     let currSubstr = s.slice(left, right)
//     if (currSubstr.length < minSubstr.length) minSubstr = currSubstr
    
//     if (right < s.length) expandRight(hs, ht, right, left, s, minSubstr)
//     else return
// }

// const expandRight = (hs, ht, right, left, s, minSubstr) => {
//     // increment right til we hit a char in hT
//     while (!(s[right] in ht)) right++
    
//     // criteria for incrementing left
//     // maintaining inclusivity
//     contractLeft(hs, ht, right, left, s, minSubstr)
// }

// const overIncluded = (char, hs, ht) => {
//     if (hs[char] > ht[char]) return true
//     return false
// }

// const allInclusive = (hs, ht) => {
//     // check all of T included in S
    
//     for (let char in ht) {
//         if (!(char in hs)) return false
//         if (hs[char] < ht[char]) return false
//     }
    
//     return true
// }

// const add = (char, h) => {
//     if (!(char in h)) h[char] = 0
//     h[char]++
// }

// const hashy = (s) => {
//     const h = {}
    
//     for (let char of s) {
//         if (!(char in h)) h[char] = 0
//         h[char]++
//     }
    
//     return h
// };