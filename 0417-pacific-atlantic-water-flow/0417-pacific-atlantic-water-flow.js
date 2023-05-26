/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// "for one cell, which oceans can it reach"

// m x n grid
    // 1 - 200

// edge case: unlikely scenario that can require special consideration
// like what if all heights are equal?

// top/left touches Pacific
// bottom/right touches Atlantic
// heights[r][c] = height > sea level
// rain can flow to neighbors <= height[r][c]

// return: 2D list of grid coordinates => result[]

var pacificAtlantic = function(heights) {
    const res = []
    const pacific = new Set()
    const atlantic = new Set()
    const numRows = heights.length
    const numCols = heights[0].length
    const visited = new Set()
    
    for (let r=0; r<numRows; r++) {
        pos = r + ',' + 0
        pacific.add(pos) // left col
    }
    
    for (let c=0; c<numCols; c++) {
        pos = 0 + ',' + c
        pacific.add(pos) // top row
    }
    
    for (let r=0; r<numRows; r++) {
        pos = `${r},${numCols-1}`
        atlantic.add(pos)
    }
    
    for (let c=0; c<numCols; c++) {
        pos = numRows-1 + ',' + c
        atlantic.add(pos)
    }
    
    bfs(pacific, heights)
    bfs(atlantic, heights)
    
    for (pos of pacific) {
        if (atlantic.has(pos)) res.push(pos.split(','))
    }
    
    return res
}

const bfs = (set, heights) => {
    const deltas = [ [1,0], [-1,0], [0,1], [0,-1] ]
    const queue = []
    for (let pos of set) queue.push(pos)
    
    while (queue.length) {
        let pos = queue.shift().split(',')
        const [ r, c ] = pos

        for (let delta of deltas) {
            const [ dr, dc ] = delta
            const nr = Number(r) + Number(dr)
            const nc = Number(c) + Number(dc)
            const nPos = nr + ',' + nc
            
            const rInBounds = nr >= 0 && nr < heights.length
            const cInBounds = nc >= 0 && nc < heights[0].length
            
            if (  rInBounds &&
                  cInBounds &&
                  !(set.has(nPos)) &&
                  heights[nr][nc] >= heights[r][c]) {
                queue.push(nPos)
                set.add(nPos)
            }
        }
    }
}