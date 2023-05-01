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

// 
var postorderTraversal = (root) => {
    // once children are null
    // add that node's val to arr
    // base case
    
    const res = []
    traverse(root, res)
    
    return res
}

const traverse = (curr, arr) => {
    if (!curr) return
    else {
        if (curr.left) traverse(curr.left, arr)
        if (curr.right) traverse(curr.right, arr)
        arr.push(curr.val)
    }
}