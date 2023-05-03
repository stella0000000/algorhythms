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
 * @return {TreeNode}
 */

// sortedArr = [1, 2, 3, 4]
// mid = idx 2 => sortedArr[2] = node 3
// newRoot.left = node 1
// newRoot.right = node 4

var balanceBST = function(root) {
    // WRAPPER
    if (!root || (!root.left && !root.right)) return root
    
    const sortedArr = convertToSortedArr(root)
    let mid = Math.floor(sortedArr.length / 2)
    
    let newRoot = sortedArr[mid]
    newRoot.left = balanceBSTarr(sortedArr.slice(0, mid))
    newRoot.right = balanceBSTarr(sortedArr.slice(mid+1))

    return newRoot
}

const balanceBSTarr = (arr) => {
    if (arr.length === 0) return null
    if (arr.length === 1) return arr[0]
    
    let mid = Math.floor(arr.length / 2)
    
    let root = arr[mid]
    root.left = balanceBSTarr(arr.slice(0, mid))
    root.right = balanceBSTarr(arr.slice(mid+1))

    return root
}

const convertToSortedArr = (root) => {
    // in-order traversal
    let curr = root
    let stack = []
    let sorted = []
    
    while (curr || stack.length) {
        while (curr) {
            // push all left leaves
            stack.push(curr)
            curr = curr.left
        }
        // now we are at the leftest leaf
        curr = stack.pop()
        sorted.push(new TreeNode(curr.val))
        curr = curr.right
    }
    
    return sorted
}