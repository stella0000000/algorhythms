/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const hash = {}
    
    for (let letter of s) {
        hash[letter] = (hash[letter] || 0) + 1
    }
    
    for (let letter of t) {
        if (!hash[letter]) return false
        hash[letter]--
    }
    
    for (const letter in hash) {
        if (hash[letter] > 1) return false
    }
    
    return true
};