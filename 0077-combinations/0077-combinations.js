/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    findCombination(n, k, 1, [], res)
    return res;
};

function findCombination(n, k, position, seq, res) {
    if (k === 0) {
        res.push([...seq])
        return
    } 
    
    if (position > n) return
    
    seq.push(position)
    findCombination(n, k - 1, position + 1, seq, res)
    seq.pop()
    
    findCombination(n, k, position + 1, seq, res)
}