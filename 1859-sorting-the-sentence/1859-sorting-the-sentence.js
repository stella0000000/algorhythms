/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const arr = s.split(' ')
    const sorted = new Array(arr.length).fill(null)
    
    for (const ele of arr) {
        // nums cap at 9
        const idx = ele[ele.length-1] - 1
        sorted[idx] = ele.slice(0, ele.length-1)
    }
    
    return sorted.join(" ")
};