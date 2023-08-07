/**
 * @param {string} digits
 * @return {string[]}
 */

// given string containing digits from [2:9]
// return: all possible letter combinations num can represent
// return: answer in any order

var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    
    let res = []
    const str = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    
    const backtrack = (i, curStr) => {
        if (curStr.length === digits.length) {
            res.push(curStr)
            return
        }
        for (const char of str[digits[i]]) {
            backtrack(i+1, curStr+char)
        }

    }
    
    backtrack(0, '')
    
    return res
};