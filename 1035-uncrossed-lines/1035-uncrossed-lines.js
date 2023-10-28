/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let n1 = nums1.length
    let n2 = nums2.length
    
    const memo = {}
    
    const dfs = (i, j) => {
        // we are building from the back
        if (i<= 0 || j<=0) return 0
        
        const key = i + ',' + j
        if (key in memo) return memo[key]
        
        // we can cross these lines
        if (nums1[i-1] === nums2[j-1]) {
            memo[key] = 1 + dfs(i-1, j-1)
        } else {
            // we want the max lines crossed if the curr nums differ
            memo[key] = Math.max(dfs(i-1, j), dfs(i, j-1))
        }
        
        return memo[key]
    }
    
    return dfs(n1, n2)
};

/*
drawing lines connecting 2 numbers
    nums1[i] to nums2[j]
    such that they don't intersect any other connections
    
    return max num of connecting lines we can draw in this way
*/