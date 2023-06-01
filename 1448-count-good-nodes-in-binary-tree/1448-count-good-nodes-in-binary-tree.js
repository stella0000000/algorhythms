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

// return count of GOOD nodes
// DFS
var goodNodes = function(root) {
    let maxSoFar = root.val
    return traverse(root, maxSoFar)
}

const traverse = (node, maxSoFar) => {
    // will naturally return the count
    if (!node) return 0
    
    let curr = node.val >= maxSoFar ? 1 : 0
    let left = traverse(node.left, Math.max(node.val, maxSoFar))
    let right = traverse(node.right, Math.max(node.val, maxSoFar))

    return left + right + curr
}