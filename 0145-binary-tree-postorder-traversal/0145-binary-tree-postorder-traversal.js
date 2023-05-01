/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = (root) => {
    if (!root) return []
    
    const res = []
    const stack = []
    const visited = new Set()
    let curr = root
    stack.push(curr)
    
    while (stack.length) {
        curr = stack[stack.length - 1]
        if (curr.left && !visited.has(curr.left)) {
            stack.push(curr.left)
            continue
        }
        if (curr.right && !visited.has(curr.right)) {
            stack.push(curr.right)
            continue
        }
        
        stack.pop()
        res.push(curr.val)
        visited.add(curr)
    }
    
    return res
    
//     const res = []
//     traverse(root, res)
//     return res
}

// const traverse = (curr, arr) => {
//     if (!curr) return
//     else {
//         if (curr.left) traverse(curr.left, arr)
//         if (curr.right) traverse(curr.right, arr)
//         arr.push(curr.val)
//     }
// }