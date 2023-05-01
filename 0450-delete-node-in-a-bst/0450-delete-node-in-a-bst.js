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
 * @param {number} key
 * @return {TreeNode}
 */

// delete node where => node.val === key
// return => the root

// find the node to remove (not guaranteed)
    // every node is unique
// delete the node
// maintain BST ordering
    // 0-child, i.e. leaf node
        // => nullify the node
    // 1-child
        // point parent to grandchild
    // 2-child
        // predecessor
            // move one to the left + get the rightmost node
                // => move to pos @ deleted node
                // => assign its children accordingly
                // point parent to grandchild
                // point predecessor to children of node it's replacing
        // successor
            // move one to the right + get the leftmost node
                // => move to pos @ deleted node
                // => assign its children accordingly
                // point parent to grandchild
                // point predecessor to children of node it's replacing

const deleteNode = (currRoot, val) => {
    if (!currRoot) return currRoot
    
    if (val < currRoot.val) {
        currRoot.left = deleteNode(currRoot.left, val)
    } else if (val > currRoot.val) {
        currRoot.right = deleteNode(currRoot.right, val)
    } else {        // equality
        if (!currRoot.left && !currRoot.right) {  // 0-child
            return null     // gotta delete the curr node: currRoot
        } else if (!currRoot.left) {              // 1-child
            return currRoot.right
        } else if (!currRoot.right) {
            return currRoot.left
        } else {                                  // 2-children
            let successor = findSuccessor(currRoot.right)
            // update the subtree where successor is now at currRoot
            // get deleted branch FIRST, before you add
            // subtree without successor
            successor.right = deleteNode(currRoot.right, successor.val) // subtree without successor
            successor.left = currRoot.left
            return successor
        }
    }
    
    return currRoot
}


// pass val of node back up tree
// to stick it where it needs to go!

const findSuccessor = (curr) => {
    if (curr.left) return findSuccessor(curr.left)
    else return curr

    // while (curr && curr.left) curr = curr.left
    // return curr
}










// const deleteNode = (root, val) => {
//     if (!root) return null
    
//     if (val > root.val) {
//         root.right = deleteNode(root.right, val)
//     } else if (val < root.val) {
//         root.left = deleteNode(root.left, val)
//         // updated BST assigned to root.left
//     } else {                 // delete root
//         if (!root.left && !root.right) {
//             return null
//         } else if (!root.left) {
//             return root.right
//         } else if (!root.right) {
//             return root.left
//         } else {
//             // find min from right subtree
//             let successor = findSuccessor(root.right)
//             root.val = successor.val
            
//             // returns subtree with value deleted
//             root.right = deleteNode(root.right, successor.val) // recursively delete successor
//         }
//     }
    
//     return root
// }

// const findSuccessor = (root) => {
//     let curr = root
//     while (curr && curr.left) {
//         curr = curr.left
//     }
    
//     return curr
// }