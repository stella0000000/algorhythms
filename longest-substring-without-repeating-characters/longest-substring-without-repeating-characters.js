/**
 * @param {string} s
 * @return {number}
 */
// bbbbb => 1
// p  w  w  k  e  w => 3 wke
   // l     r

var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    
    let set = new Set()
    let left = 0
    let longest = 0
    
    for (let right=0; right<s.length; right++) {
        // while set has char
            // delete char
            // left++

        // or just add char, and get max
        // remove duplicate til we are one past the repeated char
        
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
    
        set.add(s[right])
        
        longest = Math.max(longest, right-left + 1)
    }
    
    
    return longest
};