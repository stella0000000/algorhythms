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
 * @return {number[]}
 */

var rightSideView = function(root) {
    const levels = {}
    fillLevels(root, levels, 0)
    
    const res = []
    
    for (let level in levels) {
        res.push(levels[level].pop())
    }
    
    return res
}

const fillLevels = (root, levels, depth) => {
    if (!root) return
    
    if (!(depth in levels)) levels[depth] = []
    levels[depth].push(root.val)
    
    fillLevels(root.left, levels, depth+1)
    fillLevels(root.right, levels, depth+1)
}