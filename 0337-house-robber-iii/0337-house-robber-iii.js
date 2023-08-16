/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// one entrance: root
// each house has 1 and only 1 parent => tree
// binary tree
// police notified if 2 directly linked houses are broken into


const rob = (root) => {
    function dfs(node) {
        // go all the way to bottom
        if (!node) return { withRoot: 0, withoutRoot: 0 }
        
        let left = dfs(node.left)
        let right = dfs(node.right)
        
        let withRoot = node.val + left.withoutRoot + right.withoutRoot
        
        let withoutRoot = Math.max(left.withRoot, left.withoutRoot)
                        + Math.max(right.withRoot, right.withoutRoot)
        
        return { withRoot, withoutRoot }
    }
    
    const finalResult = dfs(root)
    
    return Math.max(finalResult.withRoot, finalResult.withoutRoot)
}