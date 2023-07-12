/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// static sliding window
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    
    let h1 = hashy(s1)
    let h2 = {}
    
    let ha1 = hashy(s1)
    let ha2 = {}
    
    let left = 0
    let right = s1.length - 1
    
    while (right < s2.length) {
        h2 = hashy(s2.slice(left, right+1))
        
        if (hashyEquality(h1, h2)) return true
        else {
            left++
            right++
        }
    }
    
    return false
}

const hashyEquality = (h1, h2) => {
    for (let char in h1) {
        if (!(char in h2)) return false
        if (h1[char] !== h2[char]) return false
    }
    
    return true
}

const hashy = (s) => {
    const h = {}
    
    for (let char of s) {
        if (!(char in h)) h[char] = 0
        h[char]++
    }
    
    return h
}