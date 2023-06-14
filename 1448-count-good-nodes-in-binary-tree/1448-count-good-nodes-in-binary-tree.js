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


const goodNodes = (root) => {
    let count = 0
    const stack = [ [root, root.val ] ]
    
    while (stack.length) {
        let [node, maxSoFar] = stack.pop()
        
        if (node.val >= maxSoFar) count++
        maxSoFar = Math.max(node.val, maxSoFar)
        
        if (node.left) stack.push([node.left, maxSoFar])
        if (node.right) stack.push([node.right, maxSoFar])
    }
    
    return count
}





















// return count of GOOD nodes
// DFS
// var goodNodes = function(root) {
//     let maxSoFar = root.val
//     return traverse(root, maxSoFar)
// }

// const traverse = (node, maxSoFar) => {
//     // will naturally return the count
//     if (!node) return 0
    
//     let curr = node.val >= maxSoFar ? 1 : 0
//     let left = traverse(node.left, Math.max(node.val, maxSoFar))
//     let right = traverse(node.right, Math.max(node.val, maxSoFar))

//     return left + right + curr
// }