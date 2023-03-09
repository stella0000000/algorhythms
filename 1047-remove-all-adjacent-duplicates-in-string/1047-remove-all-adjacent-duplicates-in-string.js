/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []

    // pop stack if the last in stack === currLetter
    for (const char of s) {
        if (stack[stack.length-1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join('')
};