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
    if (depth === 1) return new TreeNode(val, root)
    const stack = [[root, depth]]
    
    while (stack.length) {
        let [curNode, curDepth] = stack.pop()
        curDepth--
        
        if (curDepth === 1) {
            curNode.left = new TreeNode(val, curNode.left)
            curNode.right = new TreeNode(val, null, curNode.right)
        } else if (curDepth > 1) {
            if (curNode.left) stack.push([curNode.left, curDepth])
            if (curNode.right) stack.push([curNode.right, curDepth])
        }
    }
    
    return root
}

// const addOneRow = (root, val, depth, leanR) => {
//     depth--
//     if (!depth || !root) return leanR ? new TreeNode(val, null, root) : new TreeNode(val, root)
//     if (root.left || depth === 1) root.left = addOneRow(root.left, val, depth, false)
//     if (root.right || depth === 1) root.right = addOneRow(root.right, val, depth, true)
//     return root
// }

// var addOneRow = function(root, val, depth) {
//     if (depth === 1) return new TreeNode(val, root)

// 	const refactor = (node = root, currentDep = 1) => {
// 		if (!node) return
// 		if (currentDep === depth - 1) {
// 			const { left, right } = node
// 			node.left = new TreeNode(val, left)
// 			node.right = new TreeNode(val, null, right)
// 		}
// 		refactor(node.left, currentDep + 1)
// 		refactor(node.right, currentDep + 1)
// 	}
    
// 	refactor()
// 	return root
// }