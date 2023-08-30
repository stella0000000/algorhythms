/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// prevLevel = -1
// start a queue with [ root, level=0 ]

// while (queue.length)
    // get the node, and the curr level
    // if currLevel === prevLevel

    
    // if (node.left) push node.left, currLevel+1 to queue
    // if (node.right) push node.right, currLevel+1 to queue
    // prevLevel = currLevel

const connect = root => {
    if (!root) return root
    const queue = [[root, 0]]
    
    while (queue.length) {
        const [node, level] = queue.shift()
        
        if (queue.length) {
            const [nextNode, nextLevel] = queue[0]
            if (level === nextLevel) node.next = nextNode
        }
      
        if (node.left) queue.push([node.left, level+1])
        if (node.right) queue.push([node.right, level+1])
    }
    
    return root
}


// var connect = function(root) {
//     if (!root) return root
//     let level = 0
//     let queue = [[root, level]]
    
//     while (queue.length) {
//         const [curr, lev] = queue.shift()
        
//         if (queue.length) {
//             const [next, nextLev] = queue[0]
//             if (lev === nextLev) curr.next = next
//         }
        
//         if (curr.left) queue.push([curr.left, lev+1])
//         if (curr.right) queue.push([curr.right, lev+1])
//     }
    
//     return root
// }

// var connect = function(root) {
//     if (!root) return root

//     const level = 0
//     const queue = [[root, level]]
    
//     while (queue.length) {
//         const [current, level] = queue.shift()
        
//         if (queue.length) {
//             const [next, nextLevel] = queue[0]
//             if (level === nextLevel) {
//                 current.next = next
//             }
//         }
//         if (current.left) queue.push([current.left, level+1])
//         if (current.right) queue.push([current.right, level+1]);
//     }
//     return root
// };