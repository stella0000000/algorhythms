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

     3
    /
   2
 /
1
var kthSmallest = function(root, k) {
    //bottom up
    if (k === 0) return root.val
    let curr = 0
    let kthNode = null
    

    // check k when !root.left
    const inorder = (node) => {
        if (node.left) inorder(node.left)  // 1
        curr++
        if (curr === k) kthNode = node.val
        if (node.right) inorder(node.right) // 2, 2
    }
    
    inorder(root)
    return kthNode
    
    
//     const arr = []
    
//     const inorder = (root) => {
//         // LPR
//         if (!root) return null

//         inorder(root.left)
//         arr.push(root.val)
//         inorder(root.right)
//     }
    
//     inorder(root)
//     return arr[k-1]
}
    

// inorder traversal of the BST
// smallest to largest values
// find the kth node in that order