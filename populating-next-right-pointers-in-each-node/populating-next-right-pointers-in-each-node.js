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

const connect = (root) => {
    if (!root || !root.left) return root
    
    root.left.next = root.right
    if (root.next) root.right.next = root.next.left
    connect(root.left)
    connect(root.right)
    return root
}




















// var connect = function(root) {
//     if (!root || !root.left) return root;
//     root.left.next = root.right;
//     if (root.next) root.right.next = root.next.left;
//     connect(root.left);
//     connect(root.right);
//     return root;
// };

// // root: 1
//     // 2.next = 3
//     // connect(2)
//     // connect(3)
// // root: 2
//     // 4.next = 5
//     // 5.next = 3.right (or 6)
// // root: 3
//     // 6.next = 7
//     // connect(6)
//     // connect(7)
// // root: 6
//     // return root
// // root: 7
//     // return 7
