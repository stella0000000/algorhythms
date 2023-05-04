const hasCycle = (head) => {
    if (!head) return false

    let tortoise = head
    let hare = head

    while (hare && hare.next ) {
        tortoise = tortoise.next
        hare = hare.next.next
        if (hare === tortoise) return true
    }

    return false
}

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// // given head
// // determine if linked list has a cycle
//     // if (any head.next === a previous head)
// // pos = index of node that tail's next pointer is connected to
// var hasCycle = function(head) {
//     // two pointers into linked list
//     let hare = head
//     let tortoise = head

//     // advance hare twice
//         // if they collide => return true
//     while (hare) {  // we know tortoise isn't null since it lags hare
//         hare = hare.next
//         if (hare === tortoise) return true
//         if (!hare) return false

//         hare = hare.next
//         if (hare === tortoise) return true
//         tortoise = tortoise.next
//     }

//     return false
// };

// // traverse list with two pointers: fast and slow
// // fast increments by 2
// // slow increments by 1

// // one of two things MUST be true
//     // there's some node where node.next === null => no cycle
//     // or collision between two pointers => cycle