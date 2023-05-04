/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    // BFS
    
    const res = []
    const queue = [ root ]
    let levelArr = []
    
    // queue represents nodes at that level

    while (queue.length) {
        let queueLength = queue.length
        
        // iterate through current level
        for (let i=0; i<queueLength; i++) {
            let curr = queue.shift()
            levelArr.push(curr.val)
            
            for (let child of curr.children) {
                queue.push(child)
            }
        }
        
        res.push(levelArr)
        levelArr = []
    }
    
    return res
}