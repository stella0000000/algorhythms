/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// string s
// int k
// k duplicate removal =>
    // k adjacent & equal letters
    // remove them
    // causing left + right of deleted substring to concatenate together

var removeDuplicates = function(s, k) {
    // input: s, k
    // k duplicate removal consists of
        // choosing k adjacent and equal letters from s
        // + removing them
    // concatenate leftover left + right substrings
    // rinse and repeat, until we can't
    
    // if char doesn't match prev char, push 1
    // otherwise increment count on top of stack
    const stack = []
    
    for (let i=0; i<s.length; i++) {
        let char = s[i]
        if (!stack.length) {
            stack.push([ char, 1 ])
            continue
        }
        
        const [ prevChar, prevCount ] = stack[stack.length-1]
        if (prevChar === char) {
            let newCount = prevCount + 1
            
            if (newCount === k) {
                stack.pop()
            } else {
                stack[stack.length-1][1] = newCount
            }
        } else {
            stack.push([ char, 1 ])
        }
    }
    
    let res = ''
    for (const ele of stack) {
        const [char, num] = ele
        res += char.repeat(num)
    }

    return res
}