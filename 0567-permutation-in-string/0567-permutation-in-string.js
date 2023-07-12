/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// static sliding window
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false
    
    let left = 0
    let right = s1.length - 1
    
    let h1 = hashy(s1) // length of s1 = n
    let h2 = hashy(s2.slice(left, right+1)) // n
    
    // m * n
    while (right < s2.length) { // [m - n]
        if (hashyEquality(h1, h2)) return true // n
        
        remove(s2[left], h2) // constant
        left++
        right++
        if (right >= s2.length) break
            add(s2[right], h2) // constant
    }
    
    return false
}

const add = (char, h) => {
    if (!(char in h)) h[char] = 0
    h[char]++
}

const remove = (char, h) => {
    h[char]--
}

const hashyEquality = (h1, h2) => {
    for (let char in h1) { // n
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