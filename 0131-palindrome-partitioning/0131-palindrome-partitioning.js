/**
 * @param {string} s
 * @return {string[][]}
 */

// given a string `s`
// partition `s` such that every substr
// of the partition is a palindrome
// return: all possible palindrome partitions


var partition = function(s) {
    const res = []
    const partition = []
    
    const dfs = (i) => {
        // i out of bounds
        if (i >= s.length) {
            res.push([...partition])
            return
        }
        
        // every possible substring from i to j
        for (let j=i; j<s.length; j++) {
            if (isPalindrome(s.slice(i, j+1))) {
                partition.push(s.slice(i, j+1))
                dfs(j+1)
                partition.pop()
            }
        }
    }
    
    dfs(0)
    return res
};

const isPalindrome = (s1) => {
    if (s1.length <= 1) return true
    
    let front = 0
    let back = s1.length-1
    
    while (front < back) {
        if (s1[front] !== s1[back]) return false
        front++
        back--
    }
    
    return true
}