var characterReplacement = function (s, k) {
    const count = {}
    let res = 0
    let left = 0
    let maxf = 0
    
    // what info do you need => char frequency
    // to adjust window moving forward
    for (right=0; right<s.length; right++) {
        count[s[right]] = count[s[right]] ? 1 + count[s[right]] : 1
        maxf = Math.max(maxf, count[s[right]])
         
        if ((right-left+1) - maxf > k) {
            count[s[left]]--
            left++
        }
         
        res = Math.max(res, right-left+1)
    }
    
    return res
}