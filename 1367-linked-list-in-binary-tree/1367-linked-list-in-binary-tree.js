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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    // traverse tree
    const queue = [ root ]
    
    while (queue.length) {
        let currRoot = queue.shift()
        
        if (currRoot.val === head.val && search(head, currRoot)) return true
        if (currRoot.left) queue.push(currRoot.left)
        if (currRoot.right) queue.push(currRoot.right)
    }
    
    return false
}

const search = (head, root) => {    
    if (head.val !== root.val) return false
    // am i currently at the last LL node so search is complete
    if (!head.next) return true
    
    let left = (root.left) ? search(head.next, root.left) : false
    let right = (root.right) ? search(head.next, root.right) : false

    return left || right
}

