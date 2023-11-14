/**
 * @param {number[]} arr
 * @return {number}
 */

// dp[v] represents num ways to make tree with root, v
// children x & y === v, then dp[x]*dp[y] ways to make this trees
// dp[i] = num ways to have root with val A[i]
const numFactoredBinaryTrees = (arr) => {
    const n = arr.length
    const MOD = Math.pow(10, 9) + 7
    arr.sort((a, b) => a - b)

    let ans = 0
    const dp = {}

    for (let i=0; i<n; i++) {
        const root = arr[i]
        // every val can be its own tree
        dp[root] = 1

        // decrement from i-1 to 0
        // arr[i] is root which is greater than children
        for (let j = i - 1; j >= 0; j--) {
            const rightChild = arr[j]
            // indivisible
            if (root % rightChild !== 0) continue

            const target = root / rightChild
            if (target in dp) {
                dp[root] += dp[target] * dp[rightChild]
            }
        }
        
        ans = (ans + dp[root]) % MOD
    }

    return ans
}
// var numFactoredBinaryTrees = function(arr) {
//     // initialize with each ele
//     // as root only, bc valid BT
//     let num = arr.length
//     const set = new Set(arr)
    
//     for (let ele of arr) {
//         const tree = buildBT(ele, set)
//         if (isValidBT(tree)) num++
//     }
    
    
//     return num
// };

// const buildBT = (root, set) => {
    
// }

// const isValidBT = (root) => {
//     if (!root) return true
//     if (!root.left && !root.right) return true
//     if (root.left.val * root.right.val === root.val) return true
    
//     return isValidBT(root.left) && isValidBT(root.right)
// }

/*
    input: array unique ints
        // arr[i] strictly > 1
        // each num may be used any number of times
        // each non-leaf's val = to product of values of its children
    // return num of BT we can make
    
    
    
         left * right = parent
         
         4
        / \
       2   2
*/