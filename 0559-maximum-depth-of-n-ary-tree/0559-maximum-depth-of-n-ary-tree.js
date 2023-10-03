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
    const traverse = (node) => {
        if (!node) return 0

        let maxDepth = 0
        
        for (let child of node.children) {
            maxDepth = Math.max(traverse(child), maxDepth)
        }

        return maxDepth + 1
    }
    
    return traverse(root)
};