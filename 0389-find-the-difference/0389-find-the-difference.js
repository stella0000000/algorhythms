/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // string: s, string: t
    s = s.split('').sort()
    t = t.split('').sort()

    let i=0
    let count = 0
    
    while (i<s.length) {
        if (s[i] === t[i]) {
            i++
        } else {
            return t[i]
        }
    }
    
    return t[i]
};