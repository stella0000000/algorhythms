/**
 * @param {number} num
 * @return {string}
 */

// input: int NUM
// return: STR of hexidecimal

// for negative integers, 2's complement method is used

var toHex = function(num) {
    if (num == 0) return '0'
    let hex = '0123456789abcdef'
    let result = ''
    let count = 8
    while (count && num) {
        let c = hex[num & 15] // map last 4 bits to a hex digit
        result = c + result
        num = num >> 4 // removing
        count--
    }
    return result
};