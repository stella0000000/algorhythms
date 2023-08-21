/**
 * @param {character[]} chars
 * @return {number}
 */
// T: O(n) - S: O(1)

var compress = function(chars) {
    let prevChar = chars[0]
    let idx = 0
    let len = 1
    
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] === prevChar) {
            len++
            continue
        }
        
        chars[idx] = prevChar
        idx++
        
        if (len > 1) {
            let lenArr = len.toString().split('')
            for (let char of lenArr) {
                chars[idx] = char
                idx++
            }
        }
        
        prevChar = chars[i]
        len = 1
    }
    
    while (chars.length > idx) chars.pop()
    return chars.length
};