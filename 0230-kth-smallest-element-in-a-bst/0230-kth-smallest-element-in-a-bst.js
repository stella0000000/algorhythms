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
 * @return {number}
 */

// input: root of BST, int k
// return kth smallest 1-index value of nodes in the tree

var kthSmallest = function(root, k) {
    // pre-order traversal
    // we can obtain the node values sorted
    // initialize array, push to array til we have length of k-1
    let count = 0
    const stack = []
    let curr = root
    
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        
        curr = stack.pop()
        count ++
        if (count === k) return curr.val
        curr = curr.right
    }
    
};