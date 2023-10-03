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
    
    function traverse(node, depth) {
        if (!node) return
        if(depth > max) max = depth
        
        for(let child of node.children){
            traverse(child, depth+1);
            // use depth +1, if use depth++
            // it will pass the old depth value, not the updated one!
        }
    }
    
    traverse(root, 1)
    return max

    
};