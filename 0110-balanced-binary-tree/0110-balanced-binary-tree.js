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
 * @return {boolean}
 */

// Height balanced => depth of 2 subtrees of every node
// never differs by more than one

// height of left subtr
// height of right subtr
// as soon as anything is imbalanced => immediately false

const isBalanced = (root) => {
    // check difference of the two branches
    // if difference is more than 1, return false, otherwise continue
    
    let balanced = true
    
    const dfs = (root) => {
        if (!root) return 0
        if (!balanced) return -1
        
        let leftHeight = dfs(root.left)
        let rightHeight = dfs(root.right)
        
        let balanceFactor = Math.abs(leftHeight - rightHeight)
        
        if (balanceFactor > 1) balanced = false
        
        let height = 1 + Math.max(leftHeight, rightHeight)
        
        return height
    }
    
    dfs(root)
    
    return balanced
}