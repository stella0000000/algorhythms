var characterReplacement = function (s, k) {
    const count = {}
    let res = 0
    
    let l = 0
    let maxf = 0
    
    for (r=0; r<s.length; r++) {
        count[s[r]] = count[s[r]] ? 1 + count[s[r]] : 1
        maxf = Math.max(maxf, count[s[r]])
         
        if ((r-l+1) - maxf > k) {
            count[s[l]] -= 1
            l++
        }
         
        res = Math.max(res, r-l+1)
    }
    
    return res
}