/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const hash = {}
    const res = []
    let str = ''
    
    for (let char of s) {
        if (!(char in hash)) hash[char] = 0
        hash[char]++
    }
    
    for (let char in hash) res.push([char, hash[char]])
    
    res.sort((a, b) => b[1]-a[1])
    
    for (let ele of res) {
        let [char, num] = ele
        str += repeat(char, num)
    }
    
    return str
};

const repeat = (char, num) => {
    let res = ''
    for (let i=0; i<num; i++) res+=char
    return res
}