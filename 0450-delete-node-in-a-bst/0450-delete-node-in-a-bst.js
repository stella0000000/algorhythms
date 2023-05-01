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



const deleteNode = (root, val) => {
    if (!root) return null
    
    if (val > root.val) {
        root.right = deleteNode(root.right, val)
    } else if (val < root.val) {
        root.left = deleteNode(root.left, val)
        // updated BST assigned to root.left
    } else {                 // delete root
        if (!root.left) {
            return root.right
        } else if (!root.right) {
            return root.left
        } else {
            // find min from right subtree
            let minNode = minValueNode(root.right)
            root.val = minNode.val
            root.right = deleteNode(root.right, minNode.val)
        }
    }
    
    return root
}

const minValueNode = (root) => {
    let curr = root
    while (curr && curr.left) {
        curr = curr.left
    }
    
    return curr
}