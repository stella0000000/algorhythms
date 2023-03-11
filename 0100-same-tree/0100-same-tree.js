/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
Edge case:
    [x] p or q might be null
    [x] both empty, they're the same
    [x] 1 empty and 1 is not, false
1. start by comparing vals of where we currently are
    (p.val === q.val)
    a. if they're not equal return false
    b. if equal, we don't know yet about the whole time, so keep going
2. keep going means
    a. check left tree & right tree of both
        " when we go left, both trees need to go left"
    b. both left & right must be equal

p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
 */

/**

 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {    
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

