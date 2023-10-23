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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

const addOneRow = (root, val, depth) => {
    // if depth is 1, create new root node
    if (depth === 1) return new TreeNode(val, root)
    
    // stack starts @ root, depths to travel
    const stack = [[ root, depth ]]
    
    while (stack.length) {
        let [node, numDepths] = stack.pop()
        
        // for following levels
        if (numDepths - 1 === 1) {
            node.left = new TreeNode(val, node.left)
            node.right = new TreeNode(val, null, node.right)
        } else if (numDepths - 1 > 1) {
            if (node.left) stack.push([ node.left, numDepths-1 ])
            if (node.right) stack.push([ node.right, numDepths-1 ])
        }
    }
    
    return root
}

// // var addOneRow = function(root, val, depth) {
// //     if (depth === 1) return new TreeNode(val, root)

// // 	const refactor = (node = root, currentDep = 1) => {
// // 		if (!node) return
// // 		if (currentDep === depth - 1) {
// // 			const { left, right } = node
// // 			node.left = new TreeNode(val, left)
// // 			node.right = new TreeNode(val, null, right)
// // 		}
// // 		refactor(node.left, currentDep + 1)
// // 		refactor(node.right, currentDep + 1)
// // 	}
    
// // 	refactor()
// // 	return root
// // }