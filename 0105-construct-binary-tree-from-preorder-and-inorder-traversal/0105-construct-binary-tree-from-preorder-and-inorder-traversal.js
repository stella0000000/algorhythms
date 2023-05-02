/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// build the binary tree, return root

// preorder [ 3, 9, 6, 8, 20, 15, 7 ]
// inorder  [ 6, 9, 8, 3, 15, 20, 7 ]

const buildTree = (preorder, inorder) => {
    // preorder parents before children
    // inorder left child before parent before right child
    // postorder children before parents
    
    if (!preorder.length || !inorder.length) return null
    
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(root.val) // 1
    
    // preorder Root => Left => Right
    // inorder  Left => Root => Right
    
    root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1))
    
    return root
}