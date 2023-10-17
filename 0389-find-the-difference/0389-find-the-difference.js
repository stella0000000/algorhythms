/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // string: s, string: t
    const count = {}
    
    for (let ch of s) {
        if (!count[ch]) count[ch] = 0
        count[ch]++
    }
    
    for (let ch of t) {
        if (!count[ch]) return ch
        else count[ch]--
    }
};