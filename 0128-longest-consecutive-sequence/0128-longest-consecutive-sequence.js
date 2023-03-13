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
            let curr = num++
            
            while (set.has(curr)) {
                count++
                curr++
            }
        }
        
        if (count > max) max = count
    }
    
    return max
}