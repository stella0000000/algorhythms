/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node[]} tree
 * @return {Node}   // object
 */

// input: N-ary tree as an array of Node objects
// each node has a unique value
// return: the root of the N-ary tree

var findRoot = function(tree) {
    const set = new Set()

    // push all node children into set
    // if node isn't in set, we know it's the root
    
    for (const node of tree) {
        for (const child of node.children) {
            set.add(child.val)
            // adds all except root
        }
    }

    for (const node of tree) {
        if (!set.has(node.val)) return node
    }
};