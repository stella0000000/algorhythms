/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let left = 0
    let maxSize = 0

    if (s.length <= 0) return s.length

    for (let right = 0; right < s.length; right++) {
        // while set has char
            // delete char
            // left++

        // or just add char, and get max
        // remove duplicate til we are one past the repeated char
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        
        // add repeated char
        set.add(s[right])
        maxSize = Math.max(maxSize, right - left + 1)
    }

    return maxSize
};