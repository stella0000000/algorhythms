/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// A => 1 2 4 0
// B => 3

// 1 2 3 0
//     m i
// 3
// n

// 1 2  4

// if nums[m] > nums[n]
// nums[i] = nums[m]
// nums[m] = nums[n]

/*

m>=0, n>=0, nums1[m] > nums2[m]
nums1[i] = num1[m]
nums1[m] = nums2[n]
m--
*/

// nums1[i] = nums2[n], n--

// 
var merge = function(nums1, m, nums2, n) {
    m--
    n--
    
    for (let i=nums1.length-1; i>=0; i--) {
        
        
        if (n >=0 && m >=0 && nums1[m] >= nums2[n]) { // swap
            nums1[i] = nums1[m]
            nums1[m] = nums2[n]
            m--
        } else if (n >= 0) {
            nums1[i] = nums2[n]
            n--
       }
    }
};
