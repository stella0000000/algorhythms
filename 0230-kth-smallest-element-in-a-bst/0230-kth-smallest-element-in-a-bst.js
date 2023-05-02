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
    // zig zag picking up the right nodes => down to leaves
    // when can we pop from the stack?
    // how do we keep track of mins?

const kthSmallest = (root, k) => {
    // iterative
    // initialize count var
        // once count === k, return node.val
    // initialize a curr to keep track of curr node
    // initialize a stack
        // we want to start popping from stack @ leftmost leaf
    // we need to check if there are right children
    
    let count = 0
    const stack = []
    let curr = root
    
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        
        curr = stack.pop()
        count++
        if (count === k) return curr.val
        curr = curr.right
    } 
}


// const kthSmallest = (root, k) => {
//     const arr = []
//     traverse(root, arr)
//     return arr[k-1]
// }

// const traverse = (root, arr) => {
//     // do the traversal inorder
//     // and push to arr inorder vals
//     // doesn't need to return since it has ref to arr
//     if (!root) return
//     traverse(root.left, arr)
//     arr.push(root.val)
//     traverse (root.right, arr)
// }










// const kthSmallest = (root, k) => {
//     // inorder traversal
//         // get the leftmost node
//         // go back up
//         // traverse to right node
//         // down to right leaf
//         // think: zig zag
    
//     if (!root) return null
//     let count = 0
//     // const arr = []
//     const stack = []
//     let curr = root
    
//     while (curr || stack.length) {
//         while (curr) {
//             stack.push(curr)
//             curr = curr.left
//         }
        
//         // now we're at leftmost leaf
        
//         curr = stack.pop()
//         count++
//         if (count === k) return curr.val
//         // arr.push(curr.val)
//         curr = curr.right
//     }
    
//     // console.log(arr)
// }


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