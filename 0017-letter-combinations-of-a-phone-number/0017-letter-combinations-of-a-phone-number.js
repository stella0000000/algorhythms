/**
 * @param {string} digits
 * @return {string[]}
 */

// given string containing digits from [2:9]
// return: all possible letter combinations num can represent
// return: answer in any order

var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    
    const mapped = mapDigits(digits)
    const res = []
    
    // for (let char of test) console.log({char})
    // index i of currStr we're building
    const backtrack = (i, currStr) => {
        if (currStr.length === digits.length) {
            res.push(currStr)
            return
        }

        for (let char of mapped[digits[i]]) {
            // currStr += char => doesn't work
            backtrack(i+1, currStr+char)
        }
    }
    
    backtrack(0, '')
    return res
};

const mapDigits = (digits) => {
    const graph = {}
    
    for (let digit of digits) {
        digit = Number(digit)
        if (!(digit in graph)) graph[digit] = []
        if (digit === 2) graph[digit] = 'abc'
        if (digit === 3) graph[digit] = 'def'
        if (digit === 4) graph[digit] = 'ghi'
        if (digit === 5) graph[digit] = 'jkl'
        if (digit === 6) graph[digit] = 'mno'
        if (digit === 7) graph[digit] = 'pqrs'
        if (digit === 8) graph[digit] = 'tuv'
        if (digit === 9) graph[digit] = 'wxyz'
    }

    return graph
}