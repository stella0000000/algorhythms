/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    const stack = []
    
    for (let i=0; i<s.length; i++) {
        let bracket = s[i]

        if (Object.keys(pairs).includes(bracket)) {
            stack.push(pairs[bracket])
            // push corresponding closing brace
        } else if (bracket === stack[stack.length-1]) {
            // we encountered a closing brace, must = stack.pop()
            stack.pop()
        } else {
            return false
        }
    }

    return !stack.length
};