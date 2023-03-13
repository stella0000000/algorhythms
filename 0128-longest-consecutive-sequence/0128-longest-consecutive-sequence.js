/**
 * @param {number[]} nums
 * @return {number}
 */

const longestConsecutive = (nums) => {
    const set = new Set(nums)
    let max = 0
    
    for (let num of set) {
        const beginningOfSequence = !set.has(num-1)
        let count = 0
        
        if (beginningOfSequence) {
            let next = num++
            while (set.has(next)) {
                count++
                next++
            }
        }
        
        if (count > max) max = count
    }
    
    return max
}