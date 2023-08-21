/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = {}
    for (let char of s) {
        if (!(char in hash)) hash[char] = 0
        hash[char]++
    }
    
    for (let i=0; i<s.length; i++) {
        const char = s[i]
        if (hash[char] === 1) return i
    }
    
    return -1
};