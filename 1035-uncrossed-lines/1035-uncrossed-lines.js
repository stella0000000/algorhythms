/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/*
    [1 3 2 4]
     |  /  |     ... or \
    [1 2 3 4]

drawing lines connecting 2 numbers
    nums1[i] to nums2[j]
    such that they don't intersect any other connections
    
    return max num of connecting lines we can draw in this way
*/

const maxUncrossedLines = (nums1, nums2) => {
    const n1 = nums1.length
    const n2 = nums2.length
    const memo = {}
    // key is [i,j], val is # of lines
    
    const dfs = (i, j) => {
        if (i <= 0 || j <= 0) return 0
        
        const key = i + ',' + j
        if (key in memo) return memo[key]
        // key is [i,j], val is # of lines
        
        if (nums1[i-1] === nums2[j-1]) {
            memo[key] = 1 + dfs(i-1, j-1) // backbuilding
        } else {
            // take max from other nums
            // no +1 since at this stack call
            // nums don't equal across arrays
            memo[key] = Math.max(dfs(i-1, j), dfs(i, j-1))
        }
        
        return memo[key]
    }
    
    return dfs(n1, n2)
}