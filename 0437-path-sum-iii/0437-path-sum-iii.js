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
 * @param {number} targetSum
 * @return {number}
 */

// (root of BT, targetSum)
// return num of paths where sum of values === targetSum
// path must go downwards => parent to child
// doesn't need to start at root or leaf

// DFS

var pathSum = function(root, targetSum) {
    if (!root) return 0
    // get sum of edges
    // path either has or doesn't have sum
    // traverse paths
    // keep track if target reached
    
    // 2 levels of dfs
        // traversing tree
        // from each node => another search for path sum from that node
    
    let count = 0
    const stack = [root]
    
    const traverse = (node, target) => {
        // traverse from node and find paths
        // is target met
        // return a number
        
        // base case
        if (!node) return
        if (node.val === target) count++
        
        if (node.right) traverse(node.right, target-node.val)
        if (node.left) traverse(node.left, target-node.val)
    }

    while (stack.length) {
        const node = stack.pop()
        traverse(node, targetSum)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    
    return count
}
