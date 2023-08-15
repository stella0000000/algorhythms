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
 * @param {number} k
 * @return {number}
 */

// get sum at each level => array?
// sort the array
// return the sortedArr[k-1] largest sum

// function kthLargestLevelSum(root, k) {
// 	return levelSums(root).sort((s1, s2) => s2 - s1)[k - 1] || -1;
// }

// function levelSums (root) {
//     const levels = {}

//     const dfs = (node, currentLevel) => {
//         currentLevel in levels 
//             ? levels[currentLevel] += node.val 
//             : levels[currentLevel] = node.val;

//         node.left && dfs(node.left, currentLevel+1);
//         node.right && dfs(node.right, currentLevel+1); 
//     }

//     dfs(root, 0);
    
//     return Object.values(levels)
// }

var kthLargestLevelSum = function(root, k) {
    const sums = []
    const queue = [[ root, 0 ]]
    
    while (queue.length) {
        const [ node, lev ] = queue.shift()
        if (!(lev in sums)) {
            sums[lev] = 0
        }
        sums[lev] += node.val
            
        if (node.left) queue.push([ node.left, lev+1 ])
        if (node.right) queue.push([ node.right, lev+1 ])
    }
    
    sums.sort((a, b) => b-a)
    return sums[k-1] ? sums[k-1] : -1
};