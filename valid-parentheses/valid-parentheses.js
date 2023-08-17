/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // we want LIFO => last opening brace, to be the first closing brace
    // create a stack, and add complementary closing brace
    // pop off closing brace as we encounter them
    // but the closing brace must correspond to the brace we are considering
    const stack = []
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

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

    // if the stack is empty, we have accomodated all braces

    // LIFO => we want each LAST opening brace to be closed FIRST
    // stack = [] of complementary closing braces
    // pairs = { opening: complementary closing }
    // const stack = []
    // const pairs = {
    //     '(': ')',
    //     '[': ']',
    //     '{': '}'
    // }

    // for (let bracket of s) {
    //     if (Object.keys(pairs).includes(bracket)) {    // opening brace
    //         stack.push(pairs[bracket])
    //     } else if (bracket !== stack.pop()) {
    //         return false
    //     }
    // }

    // return !stack.length


    // LIFO => want last opening brace to be closed first
    // const stack = []
    // const pairs = {
    //     '(': ')',
    //     '[': ']',
    //     '{': '}'
    // }

    // for (let bracket of s) {
    //     // opening bracket
    //     if (Object.keys(pairs).includes(bracket)) {
    //         stack.push(pairs[bracket])
    //     } else if (bracket !== stack.pop()) {      // closing bracket must match last pushed to stack
    //         return false
    //     }
    // }

    // return !stack.length

    // LIFO bc we want last opening to correspond with first closing
    // const stack = []
    // const map = {
    //     '(': ')',
    //     '{': '}',
    //     '[': ']'
    // }

    // for (let i=0; i<s.length; i++) {
    //     // opening thingy
    //     if (Object.keys(map).includes(s[i])) {
    //         stack.push(map[s[i]])
    //     } else if (stack.pop() !== s[i]) {
    //         // we have a closing brace
    //         // matches w last opening brace's closing brace
    //         return false
    //     }
    // }

    // return !stack.length
};