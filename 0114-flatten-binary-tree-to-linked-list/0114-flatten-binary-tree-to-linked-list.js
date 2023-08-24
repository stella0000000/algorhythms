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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*
     3
    / \
   2   1         => 3 -> 2 -> 1
*/

// preorder => parent before children

const flatten = (root) => {
    // base case
    if (root === null) return;
    
    // by recursion definition, flatten function will faltten the left and right
    flatten(root.left);
    flatten(root.right);
    
    // post-order position:
    // left and right child trees have already flattened
    let left = root.left;
    let right = root.right;
    
    // joins the left subtree to the right
    root.left = null;
    root.right = left;
    
    // joins the original right subtree to the end of the current right subtree
    let node = root;
    while (node.right !== null) {
        node = node.right;
    }
    node.right = right;
    
    return root;
}

// const flatten = (root) => {
//     if (!root) return "edge"

//     const leftTail = flatten(root.left)
//     const rightTail = flatten(root.right)
    
//     if (leftTail !== "edge") {
//         const temp = root.right
//         root.right = root.left
//         root.left = null
        
//         let helper = root.right
//         while (helper.right) helper = helper.right
//         helper.right = temp
//     }
// }

// const preOrder = (node) => {
//     if (!node) return
    
//     let left = node.left
//     let right = node.right
//     node.left = null
//     node.right = left
    
//     preOrder(node.left)
//     preOrder(node.right)
// }