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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// given roots of 2 BTs: root, subRoot
// return true if
    // there's a subtree of root
    // with same structure
    // and node vals of subRoot
// else return false

var isSubtree = function(root, subRoot) {
    // are the nodes unique?
    // find matching subtree root
        // then we have potential subtree
    // we don't want to do any checks til roots match
    // traverse original tree til we find subRoot.root
        // if the trees don't match, we need to find the next
    
    // preorder traversal
        // uniquely defines structure of tree
        // DFS recursion
    
    // here in the main function
    // let's find all the subtree roots where they match
    
    if (root.val === subRoot.val) {
        if (isIdentical(root, subRoot)) return true
    }
    
    // keep traversing til the vals match
    let leftRes, rightRes

    if (root.left) leftRes = isSubtree(root.left, subRoot)
    if (root.right) rightRes = isSubtree(root.right, subRoot)

    if (leftRes || rightRes) return true

    return false
};

const isIdentical = (root, subRoot) => {
    // here we found matching roots
    // now we need to check if the subtrees are identical
    
    // check current nodes
    // avoid null checks too ahead
    
    // base case - push true up
    // we reached the leaves
    if (!root && !subRoot) return true
    
    if (!root || !subRoot) return false
    if (root.val !== subRoot.val) return false
    
    const left = isIdentical(root.left, subRoot.left)
    const right = isIdentical(root.right, subRoot.right)
    
    return left && right
}