/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rSet = new Set()
    let cSet = new Set()
    
    for (let r=0; r<matrix.length; r++) {
        for (let c=0; c<matrix[0].length; c++) {
            if (matrix[r][c] === 0) {
                rSet.add(r)
                cSet.add(c)
            }
        }
    }
    
    
    for (let r of rSet) {
        for (let c=0; c<matrix[0].length; c++) {
            matrix[r][c] = 0
        }
    }
    
    for (let c of cSet) {
        for (let r=0; r<matrix.length; r++) {
            matrix[r][c] = 0
        }
    }
    
    return matrix
};