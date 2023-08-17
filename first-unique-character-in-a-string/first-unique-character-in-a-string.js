/**
 * @param {string} s
 * @return {number}
 */

// string s
// first non-repeating char in s
// return index
// if !exists return -1

// example: 'hello'
// h, e, o don't repeat, but h is first => return h
// example 'hheelloo'
// all chars repeat => return -1

var firstUniqChar = function(s) {
    const hash = {}

    for (let char of s) {
        if (!hash[char]) hash[char] = 0
        hash[char]++
    }

    for (let i=0; i<s.length; i++) {
        if (hash[s[i]] === 1) return i
    }

    return -1

    // const hash = {}

    // for (let char of s) {
    //     if (!hash[char]) hash[char] = 0
    //     hash[char]++
    // }

    // for (let i=0; i<s.length; i++) {
    //     if (hash[s[i]] === 1) return i
    // }
    
    // return -1

    // const hash = {}

    // // loop through s => hash[char] = count
    // for (let char of s) {
    //     if (!hash[char]) hash[char] = 0
    //     hash[char]++
    // }

    // // looop through s, find where hash[char] = 1 first, return i
    // for (let i=0; i<s.length; i++) {
    //     let char = s[i]
    //     if (hash[char] === 1) return i
    // }

    // return -1

    // const map = {}
    // for (let char of s) {
    //     if (!map[char]) map[char] = 0
    //     map[char] ++
    // }

    // for (let i=0; i<s.length; i++) {
    //     let char = s[i]
    //     if (map[char] === 1) return i
    // }

    // return -1

    // // create a hash
    // const map = {}

    // // loop through characters
    // // { char: count }
    // for (let char of s) {
    //     if (!map[char]) map[char] = 0
    //     map[char] ++
    // }

    // // loop through characters
    // // return i where map[char], ie. count === 1
    // for (let i=0; i<s.length; i++) {
    //     let char = s[i]
    //     if (map[char] === 1) return i
    // }

    // return -1

    // const map = {}
    // loop through characters
    // key = character, val = count

    // for (let char of s) {
    //     if (!map[char]) map[char] = 0
    //     map[char]++
    // }

    // for (let j=0; j<s.length; j++) {
    //     let char = s[j]
    //     if (map[char] === 1) return j
    // }

    // return -1
};