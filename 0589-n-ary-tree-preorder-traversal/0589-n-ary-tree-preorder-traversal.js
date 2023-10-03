/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const vals = []
    const stack = [ root ]
    
    while (stack.length) {
        const node = stack.pop()
        
        vals.push(node.val)
        stack.push(...node.children.reverse())
    }
    
    return vals
};