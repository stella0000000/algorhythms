/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */


// distinct integers => candidates[]
// and target integer, target
// return list of all unique combinations of candidates[]
// where chosen numbers SUM to target
// any order

// dfs recursion - accumulation style
    // track index, currCandidates, currSum
    // base cases:
        // if currSum === target
            // res.push([...currCandidates])
            // return
        // else if index exceeds, or currSum > target return (no good branch)
    
    // num = candidates[i]
    // currCandidates.push(num)
    // dfs(i, currCandidates, currSum + num)
    // or, jk above doesn't work
    
    // currCandidates.pop()
    // dfs(i+1, currCandidates, currSum)

const combinationSum = (candidates, target) => {
    const res = []
    
    const dfs = (i, currCandidates, currSum) => {
        // include base case
        if (currSum === target) {
            res.push([...currCandidates])
            return
        }
        
        // abandon base case
        if (i >= candidates.length || currSum > target) return
        
        let num = candidates[i]
        
        // include
        currCandidates.push(num)
        dfs(i, currCandidates, currSum + num)
        
        // exclude
        currCandidates.pop()
        dfs(i+1, currCandidates, currSum)
    }
    
    dfs(0, [], 0)
    return res
}










// var combinationSum = function (candidates, target, index = 0, combination = [], combinations = []) {
//     if (target < 0) return combinations
//     if (target === 0) return combinations.push([...combination)
//     // need copy bc we're modifying in other stack call of recursion

//     for (let i = index; i < candidates.length; i++) {
//         backTrack(candidates, target, i, combination, combinations)
//     }

//     return combinations
// }

// const backTrack = (candidates, target, i, combination, combinations) => {
//     let num = candidates[i]
//     combination.push(num)
//     combinationSum(candidates, (target - num), i, combination, combinations)
    
//     combination.pop()
// }


// const combinationSum = (candidates, target) => {
//     if (candidates.length === 0) return [[]]
    
//     const res = []
    
//     const dfs = (currCombination, currTarget, i) => {
//         // single copy before pushing
//         // bc we're maintaining single list
//         // and we need to modify and use it in other recursions
        
//         if (currTarget === 0) {
//             res.push([...currCombination])
//             console.log({ res })
//             return
//         }
    
//         if (i >= candidates.length || currTarget < 0) return
        
//         // include candidate
//         let num = candidates[i]
//         currCombination.push(num)
//         dfs(currCombination, currTarget-num, i)
        
//         // pop when we exclude, jk pop it from currCombination
//         // currTarget stays the same
//         currCombination.pop()
//         dfs(currCombination, currTarget, i++)
//     }
    
//     dfs(candidates, [], target, 0)
    
//     return res
// }

// const combinationSum = (candidates, target) => {
//     const res = []
//     const temp = []
    
//     const iterate = (index, sum) => {
//         if (sum > target) return
//         if (sum === target) {
//             res.push([...temp])
//             return
//         }

//         for (let i=index; i<candidates.length; i++) {
//             if (candidates[i] > target) continue
//             temp.push(candidates[i])
//             iterate(i, sum+candidates[i])
//             temp.pop()
//         }
//     }
//     iterate(0, 0)
//     return res
// }