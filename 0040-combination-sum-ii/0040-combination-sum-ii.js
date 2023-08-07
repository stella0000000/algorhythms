/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// backtracking
    // general algorithm for finding all (or some) solns to computational problems
// incrementally builds candidates to solutions
// abandons candidate (backtrack) as soon as
// it determines candidate can't lead to final solution

// each num used once
// no dupes

// push, backtrack
// pop, backtrack

/*

return: result = [
    [1, 2, 2],
    
]
candidates.sort = [1, 2, 2, 2, 5]

>> backtrack(5, 0, []) => remainder = 5, startIdx = 0, curr = []
    for (let i=0; i < 5; i++)
        num = 1
        if (i:0 > start:0 && num:1 === candidates[-1]) {
            `continue`, but falsy right now
        }
        current.push(1) => current = [1]
        
        >> backtrack(5-1, 0+1, [1]) => backtrack(4, 1, [1])
            for (let i=1; i < 5; i++)
                num = 2
                if (i:1 > start:1 && num:2 === candidates[0]:1) {
                    falsy
                }
                current.push(2) => current = [1, 2]
                
                >> backtrack(4-2, 1+1, [1, 2]) => backtrack(2, 2, [1, 2])
                    for (let i=2; i < 5; i++)
                        num = 2
                        if (i:2 > start:2 && num:2 === candidates[1]:2) {
                            falsy
                        }
                        current.push(2) => [1, 2, 2]
                        
                        >> backtrack(2-2, 2+1, [1, 2, 2]) => backtrack(0, 3, [1, 2, 2])
                            rem === 0
                            result.push([1, 2, 2])
                            RETURN!
                        
                        current.pop() => current = [1, 2]
                        
                        num = candidates[3] = 2
                        if (i:3 > start:2 && num:2 === candidates[3-1]:2) {
                            truthy => continue!
                            shift i pointer more bc we considered a 2 before
                        }
                        
                        num = candidates[4] = 5
                        if (i:4 > start:2 && num:5 === candidates[4-1]: 2) {
                            falsy
                        }
                        current.push(5) => [1, 2, 5]
                        
                        >>backtrack(2-5, 4, [1, 2, 5]) => backtrack(-3, 4, [1, 2, 5])
                            RETURN
                        
                        current.pop() => [1, 2]
                        
                            
            
    }


*/

const combinationSum2 = (candidates, target) => {
    const result = []
    candidates.sort((b,a) => b - a)
    const backtrack = (rem, start, current) => {
        if (rem < 0) return
        if (rem === 0) {
            result.push([...current])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            let num = candidates[i]
            
            // i > start for end of the array
            if (i > start && num === candidates[i-1]) continue
            current.push(num)
            backtrack(rem - num, i + 1, [...current])
            current.pop()
        }
    }
    backtrack(target, 0 , [])
    return result
}

// var combinationSum2 = function(candidates, target) {
//     const res = new Set()
//     const arr = []
//     candidates = candidates.sort((a, b) => a < b ? -1 : 1)
//     backtrack(candidates, target, [], res, arr)
//     return arr
// };

// const backtrack = (candidates, target, currCandidates, res, arr) => {
//     if (target < 0) return
    
//     if (target === 0) {
//         let str = `${[...currCandidates].sort((a, b) => a < b ? -1 : 1)}`
//         if (!res.has(str)) {
//             res.add(str)
//             arr.push([...currCandidates])
//         }
//         return
//     }
    
//     // console.log({ candidates })
//     for (let i=0; i<candidates.length; i++) {
//         let num = candidates[i]
//         let newCandidates = [...candidates.slice(0, i), ...candidates.slice(i+1)]
        
//         currCandidates.push(num)
//         backtrack(newCandidates, target - num, currCandidates, res, arr)
//         currCandidates.pop()
//     }
// }