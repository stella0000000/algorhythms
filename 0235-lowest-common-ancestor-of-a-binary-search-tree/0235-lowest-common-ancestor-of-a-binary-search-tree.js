/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {
    // find node j where p <= j <= q where p <= q
    // if p = q -> j = p and q
    let curr = root
    
    const smaller = Math.min(p.val, q.val)
    const larger = Math.max(p.val, q.val)
    
    // recursive
    if (smaller <= curr.val && curr.val <= larger) {
        return curr
    } if (larger < curr.val) {
        return lowestCommonAncestor(curr.left, p, q)
    } else {
        return lowestCommonAncestor(curr.right, p, q)
    }
    
    // iterative!
    // while (curr) {
    //     if (smaller <= curr.val && curr.val <= larger) {
    //         return curr
    //     } else if (larger < curr.val) {
    //         curr = curr.left
    //     } else {
    //         curr = curr.right
    //     }
    // }
}