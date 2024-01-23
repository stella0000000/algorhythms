/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, nodes) {
    const set = new Set(nodes)
    
    const traverse = (root) => {
        if (!root) return null
        if (set.has(root)) return root
        
        let left = traverse(root.left)
        let right = traverse(root.right)
        
        if (left && right) return root
        return left ? left : right
    }
    
    return traverse(root)
    
    
    // do it iteratively
    // stack for dfs
    // stack of possible ancestors - when to pop!!
    
    
//     if (nodes.length === 1) return nodes[0]
//     const set = new Set(nodes)
//     let res = root
    
//     const dfs = (root) => {
//         // base cases
//         if (!root) return
//         if (!set.size) return   // return if set is empty
        
//         if (!set.has(root)) res = root
//         console.log({ res, set, root })
        
//         set.delete(root)
        
//         if (root.left) dfs(root.left)
//         if (root.right) dfs(root.right)
//     }
    
//     dfs(root)
//     return res
};