/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let count = 0
    nums = nums.sort((a, b) => a-b)
    console.log(nums)
    
    for (let i=0; i<nums.length-2; i++) {
        let k = i+2
        
        for (let j=i+1; j<nums.length-1 && nums[i]!==0; j++) {
            while (k < nums.length && nums[i]+nums[j]>nums[k]) {
                k++
                count += k - j - 1
            }
        }
    }
    
    return count
    
        // for (let i=0; i<nums.length-2; i++) {
    //     let a = nums[i]
    //     for (let j=i+1; j<nums.length-1; j++) {
    //         let b = nums[j]
    //         for (let k=j+1; k<nums.length; k++) {
    //             let c = nums[k]
    //             if (isValid(a, b, c)) count++
    //         }
    //     }
    // }
};

const isValid = (a, b, c) => {
    let sum1 = a+b
    let sum2 = b+c
    let sum3 = a+c
    
    return sum1 > c || sum2 > a || sum3 > b
}