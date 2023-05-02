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

// initialize curr at root
    // continue traversing to leftest leaf

const kthSmallest = (root, k) => {
    // inorder traversal
        // get the leftmost node
        // go back up
        // traverse to right node
        // down to right leaf
        // think: zig zag
    
    if (!root) return null
    let count = 0
    // const arr = []
    const stack = []
    let curr = root
    
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        
        // now we're at leftmost leaf
        
        curr = stack.pop()
        count++
        if (count === k) return curr.val
        // arr.push(curr.val)
        curr = curr.right
    }
    
    // console.log(arr)
}














// var kthSmallest = function(root, k) {
//     // pre-order traversal
//     // we can obtain the node values sorted
//     // initialize array, push to array til we have length of k-1
//     let count = 0
//     const stack = []
//     let curr = root
    
//     while (curr || stack.length) {
//         while (curr) {
//             stack.push(curr)
//             curr = curr.left
//         }
        
//         curr = stack.pop()
//         count ++
//         if (count === k) return curr.val
//         curr = curr.right
//     }
    
// };