/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //move all 0 to back
    let l = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++ // nonzero now
            // // only increment l when it's not a 0
        }
    }
    
    // O(n) Time Complexity
	// 2 Pointers
    
	return nums
};

