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

const combinationSum2 = (candidates, target) => {
    const result = []
    candidates.sort((b,a) => b - a)
    
    const backtrack = (rem, start, current) => {
        if(rem < 0) return
        if(rem === 0) {
            result.push(current.slice())
            return
        }
        
        for(let i = start; i < candidates.length; i++){
            let num = candidates[i]
            if(i > start && num === candidates[i - 1]) continue
            current.push(num)
            backtrack(rem - num, i + 1, current.slice())
            current.pop()
        }
    }
    
    backtrack(target, 0 , [])
    
    return result;
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