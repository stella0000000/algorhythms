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
 * @param {number} val
 * @return {TreeNode}
 */

const insertIntoBST = (root, val) => {
    const newNode = new TreeNode(val)
    
    // we want to add the val where
    // left child < val < right child
    if (!root) return root = newNode
    
    let curr = root
    
    while (curr) {
        if (val < curr.val) {
            if (curr.left === null) {
                curr.left = newNode
                return root
            }
            curr = curr.left
        } else if (val > curr.val) {
            if (curr.right === null) {
                curr.right = newNode
                return root
            }
            curr = curr.right
        }
    }
}