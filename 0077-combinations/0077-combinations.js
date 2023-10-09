/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    findCombination(n, k, 1, [], res)
    return res
};

function findCombination(n, k, i, curr, res) {
    if (k === 0) {
        res.push([...curr])
        return
    } 
    
    if (i > n) return
    
    curr.push(i)
    findCombination(n, k - 1, i + 1, curr, res)
    
    curr.pop()
    findCombination(n, k, i + 1, curr, res)
}