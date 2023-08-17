/**
 * @param {string} s
 * @return {string}
 */

const decodeString = (s) => {
    const nums = '0123456789'
    let currstr = ''
    let currnum = 0
    const stack = []
    
    for (let char of s) {
        console.log({stack, currnum, currstr})
        if (char === '[') {
            stack.push(currnum)
            stack.push(currstr)
            currstr = ''
            currnum = 0
        } else if (char === ']') {
            prevstr = stack.pop()
            num = stack.pop()
            currstr = prevstr + repeat(num, currstr)
        } else if (nums.includes(char)) {
            currnum = 10 * currnum + Number(char)
        } else {
            currstr += char
        }
    }
    
    return currstr
}

const repeat = (num, str) => {
    let message = ''
    
    for (let i=0; i<num; i++) {
        message += str
    }
    return message
}



// // tree of nested thing

// // first parse input into logical structure holding "what is how many times"
// // then build result

// // const parseString = (s) => {
// //     // what is the result structure here to holding logic
// // }

// // var decodeString = function(s) {
// //     // return currStr
// //     const stack = []
// //     let currNum = 0
// //     let currStr = ''

// //     for (const char of s) {
// //         if (char === '[') {
// //             stack.push([currStr, currNum])
// //             currStr = ''
// //             currNum = 0
// //         } else if (char === ']') {
// //             const [ prevStr, prevNum ] = stack.pop()
// //             currStr = prevStr + currStr.repeat(prevNum)
// //         } else if (!isNaN(char)) {    // string = Number
// //             currNum = currNum * 10 + Number(char)
// //         } else {                      // str
// //             currStr += char
// //         }
// //     }
// //     return currStr
// // };