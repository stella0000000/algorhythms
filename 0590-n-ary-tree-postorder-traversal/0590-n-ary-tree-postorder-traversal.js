/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// parent before child

var postorder = function(root) {
    if (!root) return []
    
    const stack = [root]
    const vals = []
    
    while (stack.length) {
        const node = stack.pop()
        if (node) vals.push(node.val)
        for (let child of node.children) stack.push(child)
    }
    
    return vals.reverse()
};