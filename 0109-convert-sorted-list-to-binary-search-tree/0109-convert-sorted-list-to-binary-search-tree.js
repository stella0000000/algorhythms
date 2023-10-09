/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

const sortedListToBST = (head) => {
    // linked list to array
    // sort BST
    if (!head) return head
    
    const sortedArr = convertToSortedArr(head)
    let mid = Math.floor(sortedArr.length / 2)
    
    const newRoot = sortedArr[mid]
    newRoot.left = balanceBST(sortedArr.slice(0, mid))
    newRoot.right = balanceBST(sortedArr.slice(mid+1))
          
    return newRoot
}

const balanceBST = (arr) => {
    if (arr.length === 0) return null
    if (arr.length === 1) return arr[0]
    
    let mid = Math.floor(arr.length / 2)
    
    let root = arr[mid]
    root.left = balanceBST(arr.slice(0, mid))
    root.right = balanceBST(arr.slice(mid+1))
    
    return root
}

const convertToSortedArr = (head) => {
    let curr = head
    const sorted = []
    while (curr) {
        sorted.push(new TreeNode(curr.val))
        curr = curr.next
    }
    return sorted
}



// var sortedListToBST = function(head) {
//     // linked list to array
//     // sort BST
//     if (!head) return head
    
//     const sortedArr = convertToSortedArr(head)
//     let mid = Math.floor(sortedArr.length / 2)
    
//     let newRoot = sortedArr[mid]
//     newRoot.left = balanceBSTarr(sortedArr.slice(0, mid))
//     newRoot.right = balanceBSTarr(sortedArr.slice(mid+1))

//     return newRoot
// }

// const balanceBSTarr = (arr) => {
//     if (arr.length === 0) return null
//     if (arr.length === 1) return arr[0]
    
//     let mid = Math.floor(arr.length / 2)
    
//     let root = arr[mid]
//     root.left = balanceBSTarr(arr.slice(0, mid))
//     root.right = balanceBSTarr(arr.slice(mid+1))

//     return root
// }

// // sorted arr of LL nodes, but then make it into treenodes for our BST
// const convertToSortedArr = (head) => {
//     let curr = head
//     let sorted = []
    
//     while (curr) {
//         sorted.push(new TreeNode(curr.val))
//         curr = curr.next
//     }
    
//     return sorted
// }