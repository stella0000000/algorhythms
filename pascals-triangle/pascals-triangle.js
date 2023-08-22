/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [[1]]
    
    for (let i=0; i<numRows-1; i++) {
        let lastRow = output[output.length-1]
        let row = [1]
        
        for (let j=0; j<lastRow.length-1; j++) {
            row.push(lastRow[j] + lastRow[j+1])
        }
        
        row.push(1)
        output.push(row)
        
    }
    
    return output
};