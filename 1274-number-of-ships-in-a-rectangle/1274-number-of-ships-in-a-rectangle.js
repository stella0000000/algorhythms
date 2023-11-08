/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight // [x, y]
 *     @param {integer[]} bottomLeft // [x, y]
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */

// limited to 400 calls
// divide and conquer => cut to logorithmic time
// split into quadrants
    // further search quadrants where we did find ships
// space is O(n) recursive stack
var countShips = function(sea, topRight, bottomLeft) {
    // we have no ships
    if (!sea.hasShips(topRight, bottomLeft)) return 0
    // honed in on a ship at a single point
    if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) return 1
    
    const [xBL, yBL] = bottomLeft
    const [xTR, yTR] = topRight
    
    const midX = Math.floor((xBL+xTR) / 2)
    const midY = Math.floor((yBL+ yTR) / 2)
    
    const quad1 = countShips(sea, [midX, midY], bottomLeft)
    const quad2 = countShips(sea, [midX, yTR], [xBL, midY+1] )
    const quad3 = countShips(sea, topRight, [midX+1, midY+1])
    const quad4 = countShips(sea, [xTR, midY], [midX+1, yBL])
    
    return quad1 + quad2 + quad3 + quad4
    /*
    [xTR, yTR] = topRight
    [xBL, yBL] = bottomLeft
    
    midY = yTR / 2
    midX = xTR / 2
    
    quad1
        bl = bottomLeft(x), bottomLeft(y)
        tr = midX, midY
    quad2
        bl = bottomLeft(x),midY+1 
        tr = midX, topRight(y)
    quad3
        bl = midX+1, midY+1
        tr = topRight(x), topRight(y)
    quad4
        bl = midX+1, bottomLeft(y)
        tr = topRight(x), midY
    
    [
                           tR
     __________*____________*
       2       |     3      |
    *__________*____________*
       1       |     4
    *__________*____________
   bL
   
    ]
    
    
    
    
    
    */
    
}





// var countShips = function(sea, topRight, bottomLeft) {
//     if (!sea.hasShips(topRight, bottomLeft)) return 0
//     if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) return 1

//     // topRight [x0, y0]
//     // bottomLeft [x1, y1]
//     const midX = Math.floor((topRight[0] + bottomLeft[0]) / 2)
//     const midY = Math.floor((topRight[1] + bottomLeft[1]) / 2)
    
//     /*

//     [                           tR[0], tR[1]


//                 mX, mY


//     bL[0], bL[1]                  ]

//     */
    
//     const bottomLeftQuad = countShips(sea, [midX, midY], bottomLeft)
//     const bottomRightQuad = countShips(sea, [topRight[0], midY], [midX+1, bottomLeft[1]])
//     const topLeftQuad = countShips(sea, [midX, topRight[1]], [bottomLeft[0], midY+1])
//     const topRightQuad = countShips(sea, topRight, [midX + 1, midY + 1])   
    
//     return bottomLeftQuad + bottomRightQuad + topLeftQuad + topRightQuad
// };