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


const isValidBST = (root) => {
    return traverse(root, -Infinity, Infinity)
}

const traverse = (node, minSeen, maxSeen) => {
    if (!node) return true
    if (node.val <= minSeen) return false
    if (node.val >= maxSeen) return false
    
    let left = traverse(node.left, minSeen, node.val)
    let right = traverse(node.right, node.val, maxSeen)
    
    return left && right
}


// const traverse = (node, min, max) => {
//     if (!node) return true
//     if (node.val <= min) return false
//     if (node.val >= max) return false
    
//     const isLeftBST = traverse(node.left, min, node.val)
//     const isRightBST = traverse(node.right, node.val, max)
    
//     return isLeftBST && isRightBST
// }


// // this is where the recursion happens
// const isValidSubtree = (root, minSeen, maxSeen) => {
//     if (!root) return true
    
//     if (root.val >= maxSeen || root.val <= minSeen) return false
    
//     const leftBranch = isValidSubtree(root.left, minSeen, root.val)
//     const rightBranch = isValidSubtree(root.right, root.val, maxSeen)
    
//     return leftBranch && rightBranch
// }