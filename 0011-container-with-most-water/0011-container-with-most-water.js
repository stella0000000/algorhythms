/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length-1
    let lh = height[l]
    let rh = height[r]
    let max = (r-l) * Math.min(lh, rh)
    
    while (l < r) {
        while (l < r && lh <= rh) {
            l++
            if (lh < height[l]) {
                lh = height[l]
                let curr = (r-l) * Math.min(lh, rh)
                max = Math.max(max, curr)
            }
        }
        
        while (l < r && rh <= lh) {
            r--
            if (rh < height[r]) {
                rh = height[r]
                let curr = (r-l) * Math.min(lh, rh)
                max = Math.max(max, curr)
            }
        }
    }
    
    return max
};

// 1. set 2 pointers: l=0, r=height.length-1
// 2. initialize maxArea var
// 3. initialize while loop => left < right
    // 4. maxArea = Math.max(maxArea, currArea)
        // currArea = width * min(height[l], height[r])
    // 5. we want to shift pointers accordingly to potentially maximize area
        // if (height[l] < height[r])
            // increment left til we reach height[l] > lh
        // else if (height[r] < height[l])
            // decrement right til we reach height[r] > rh

// return maxArea