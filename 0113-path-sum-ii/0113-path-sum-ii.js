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
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function(root, sum) {
  if (root === null) return []
  const res = []
  
  backtrack(root, sum, res, [])
    
  return res
};

function backtrack(root, sum, res, tempList) {
  if (root === null) return
  if (!root.left && !root.right && sum === root.val) return res.push([...tempList, root.val])

  tempList.push(root.val)
  backtrack(root.left, sum - root.val, res, tempList)
  backtrack(root.right, sum - root.val, res, tempList)
  tempList.pop()
}

// var pathSum = function(root, targetSum) {
//     const paths = []
    
//     const traverse = (node, target, currPath=[]) => {
//         if (!node) return
//         if (!node.left && !node.right && target === node.val) return [node.val]
        
//         let leftPath = traverse(node.left, target-node.val)
//         let rightPath = traverse(node.right, target-node.val)
        
//         console.log(leftPath)
//         if (leftPath) paths.push([node.val, ...leftPath])
//         // console.log(paths)
        
//     }
    
//     traverse(root, paths)
//     return paths
// };