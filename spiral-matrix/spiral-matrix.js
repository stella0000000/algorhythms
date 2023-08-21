/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const numRows = matrix.length
    const numCols = matrix[0].length
    const total = numRows * numCols
    
    const res = []
    
    let upperB = 0
    let leftB = 0
    let lowerB = numRows - 1
    let rightB = numCols - 1
    
    while (res.length < total) {
        // rightward
        if (upperB <= lowerB) {
            for (let i = leftB; i <= rightB; i++) res.push(matrix[upperB][i])
            upperB++ // took care of top row
        }
        
        // downward
        if (leftB <= rightB) {
            for (let i = upperB; i<= lowerB; i++) res.push(matrix[i][rightB])
            rightB-- // took care of last col
        }
        
        // leftward
        if (upperB <= lowerB) {
            for (let i = rightB; i >= leftB; i--) res.push(matrix[lowerB][i])
            lowerB-- // took care of bottom row
        }
        
        // upward
        if (leftB <= rightB) {
            for (let i = lowerB; i >= upperB; i--) res.push(matrix[i][leftB])
            leftB++ // took care of first col
        }
    }
    
    return res
};

// 123
// 456
// 789

// 1236987