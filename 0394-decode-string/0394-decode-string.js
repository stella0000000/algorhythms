/**
 * @param {string} s
 * @return {string}
 */

// k[encoded_string]
// 3[a2[c]] = accacc

/*
        1) opening braces -> new sequence start
        add curr string and curr number to the stack, reassign both
        to initial values
*/

const decodeString = (s) => {
    const stack = []
    let str = ''
    let num = ''
    
    for (const char of s) {
        if (char === '[') {
            stack.push([ str, num ])
            str = ''
            num = ''
        } else if (char === ']') {
            // build
            const [ prevStr, prevNum ] = stack.pop()
            str = prevStr + str.repeat(prevNum)
        } else if (!isNaN(char)) { // number
            // offset prev currNum by 10th digit
            // currNum = currNum * 10 + Number(char)
            num += char
        } else {
            str += char
        }
        // num
        // letter
        // open brace
            // new sequence
            // add currStr, currNum to stack
            // reset currStr, currNum
        // close brace
            // build
            // pop prevChar, prevNum from stack
            // append to currStr repeated times
    }
    
    return str
}



// var decodeString = function(s) {
//     // return currStr
//     const stack = []
//     let currNum = 0
//     let currStr = ''

//     for (const char of s) {
//         if (char === '[') {
//             stack.push([currStr, currNum])
//             currStr = ''
//             currNum = 0
//         } else if (char === ']') {
//             //build
//             const [ prevStr, prevNum ] = stack.pop()
//             currStr = prevStr + currStr.repeat(prevNum)
//         } else if (!isNaN(char)) {    // string = Number
//             currNum = currNum * 10 + Number(char)
//         } else {                      // str
//             currStr += char
//         }
//     }
//     return currStr
// };

// const decodeString = (s) => {
//     const stack = []
//     const nums = '0123456789'

//     for (const char of s) {
//         if (nums.includes(char)) {
//           stack.push(Number(char))
//         } else if (char === ']') {
//             let currStr = ''
//             while (!nums.includes(stack[stack.length-1])) {
//                 currStr = stack.pop() + currStr
//             }

//             let currNum = ''
//             while (nums.includes(stack[stack.length-1])) {
//                 currNum = stack.pop() + currNum
//             }
            
//             stack.push(repeat(Number(currNum), currStr))
//         } else if (char !== '[') {
//             stack.push(char)
//         }
//     }

//     return stack.join('')
// }
    
const repeat = (num, str) => {
  let res = ''
  for (let i=0; i<num; i++) res += str
  return res
}

// const decodeString = (s) => {
//     const nums = '0123456789'
//     let currstr = ''
//     let currnum = 0
//     const stack = []
    
//     for (let char of s) {
//         if (char === '[') {
//             stack.push(currnum)
//             stack.push(currstr)
//             currstr = ''
//             currnum = 0
//         } else if (char === ']') {
//             let prevstr = stack.pop()
//             let num = stack.pop()
//             currstr = prevstr + repeat(num, currstr)
//         } else if (nums.includes(char)) {
//             currnum = 10 * currnum + Number(char)
//         } else {
//             currstr += char
//         }
//     }
    
//     return currstr
// }

// const repeat = (num, str) => {
//     let message = ''
    
//     for (let i=0; i<num; i++) {
//         message += str
//     }
//     return message
// }



// // // tree of nested thing

// // // first parse input into logical structure holding "what is how many times"
// // // then build result

// // // const parseString = (s) => {
// // //     // what is the result structure here to holding logic
// // // }

// var decodeString = function(s) {
//     // return currStr
//     const stack = []
//     let currNum = 0
//     let currStr = ''

//     for (const char of s) {
//         if (char === '[') {
//             stack.push([currStr, currNum])
//             currStr = ''
//             currNum = 0
//         } else if (char === ']') {
//             const [ prevStr, prevNum ] = stack.pop()
//             currStr = prevStr + currStr.repeat(prevNum)
//         } else if (!isNaN(char)) {    // string = Number
//             currNum = currNum * 10 + Number(char)
//         } else {                      // str
//             currStr += char
//         }
//     }
//     return currStr
// };