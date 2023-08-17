/**
 * @param {string} s
 * @return {string}
 */

var isPalindrome = function(str) {
    let front = 0
    let back = str.length - 1

    while (front < back) {
        if (str[front] !== str[back]) {
            return false
        }
        front ++
        back --
    }

    return true
}

var longestPalindrome = function(s) {
    let longest = ''

    for (let i = 0; i<s.length; i++) {
        let tempStr = ''
        for (let j=i; j<s.length; j++) {
            tempStr += s[j]
            if (tempStr.length > longest.length && isPalindrome(tempStr)) {
                longest = tempStr
            }
        }
    }

    return longest
};