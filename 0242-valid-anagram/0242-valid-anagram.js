/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const hash = {}

    for (let letter of s) {
        if (!hash[letter]) hash[letter] = 0
        hash[letter]++
    }

    for (let letter of t) {
        if (!hash[letter]) return false
        hash[letter]--
    }

    return Object.values(hash).every(val => val === 0)
};