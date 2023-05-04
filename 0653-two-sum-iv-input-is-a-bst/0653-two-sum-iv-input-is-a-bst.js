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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const set = new Set()
    const queue = [ root ]
    
    while (queue.length) {
        let node = queue.shift()
        let complement = k - node.val
        
        if (set.has(complement)) return true
        
        set.add(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    
    return false
}