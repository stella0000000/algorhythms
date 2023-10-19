/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChildArr, rightChildArr) {
    const leftSet = new Set(leftChildArr)
	const rightSet = new Set(rightChildArr)
	let root = null
    
    let count = 0

	// find root node
	for (let i=0; i<n; i++) {
		if (!leftSet.has(i) && !rightSet.has(i)) {
			root = i
            count++
   		}
        
        if (count > 1) return false
    }
    
    const visited = new Set()
    const queue = [ root ]
    while (queue.length) {
        const node = queue.shift()
        if (visited.has(node)) return false
        visited.add(node)

        let leftChild = leftChildArr[node]
        let rightChild = rightChildArr[node]

        if (leftChild !== -1) queue.push(leftChild)
        if (rightChild !== -1) queue.push(rightChild)
    }

    return visited.size === n

};