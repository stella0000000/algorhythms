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
 * @return {boolean}
 */

const isValidBST = (root) => {
    // start with root
    // root.left.val < root.val < root.right.val
    // left subtree contains nodes less than the node's key
    // right subtree contains nodes greater than node's key
    
    // left + right subtrees must be BST
    
    // start at root's children
    if (isValidNode(root.left, -Infinity, root.val) === false) {
        return false
    }
    
    if (isValidNode(root.right, root.val, Infinity) === false) {
        return false
    }
    
    // initially
    // if we go left, we need to bound right with maxSeen
    // if we go right, we need to bound left with minSeen
    
    return true
}

// this is where the recursion happens
const isValidNode = (node, minSeen, maxSeen) => {
    // if there's nothing on this side, it's valid
    if (!node) return true

    // is the node valid
    if ((minSeen < node.val && node.val < maxSeen) === false) {
        return false
    }
    
    // is the left subtree valid => recursively, check the node, and its subtrees
    if (isValidNode(node.left, minSeen, node.val) === false) {
        return false
    }

    // is the right subtree valid => recursively, check the node, and its subtrees
    if (isValidNode(node.right, node.val, maxSeen) === false) {
        return false
    }
    
    return true
}