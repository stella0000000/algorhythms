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
    
    let smaller, larger
    if (p.val < q.val) {
        smaller = p.val
        larger = q.val
    } else {
        smaller = q.val
        larger = p.val
    }
    
    while (curr) {
        if (smaller <= curr.val && curr.val <= larger) {
            return curr
        } else if (smaller < curr.val && larger < curr.val) {
            curr = curr.left
        } else {
            curr = curr.right
        }
    }
}