/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

var maxDepth = function (root) {
    let max = 0
    
    const traverse = (node, depth) => {
        if (!node) return 
        if (depth > max) max = depth
        
        for (const child of node.children) {
            traverse(child, depth+1)
        }
    }
    
    traverse(root, 1)
    return max    
};