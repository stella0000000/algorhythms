/**
 * @param {string} s
 * @return {string}
 */

const decodeString = (s) => {
    const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      let pattern = ''
      let c = stack.pop()
      while (c !== '[') {
        pattern = c + pattern
        c = stack.pop()
      }
      let numStr = ''
      let num = stack.pop()
      while (/[0-9]/.test(num)) {
        numStr = num + numStr
        num = stack.pop()
      }
      stack.push(num)
      let str = ''
      for (let j = 0; j < parseInt(numStr, 10); j++) {
        str += pattern
      }
      stack.push(str)
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
}

const repeat = (num, str) => {
    let message = ''
    
    for (let i=0; i<num; i++) {
        message += str
    }
    return message
}




// tree of nested thing

// first parse input into logical structure holding "what is how many times"
// then build result

// const parseString = (s) => {
//     // what is the result structure here to holding logic
// }

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