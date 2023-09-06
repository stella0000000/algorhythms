/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let arr = [...height]
    let left = 0
    let right = height.length -1
    let lh = arr[left]
    let rh = arr[right]

    while (left < right) {
        // # print(filled_array)
        
        // fill from left
        while (left < right && lh <= rh) {
            left++
            if (arr[left] > lh) {
                lh = arr[left]
            } else {
                arr[left] = lh
            }
        }
        
        // fill from right
        while (left < right && lh >= rh) {
            right--
            if (arr[right] > rh) {
                rh = arr[right]
            } else {
                arr[right] = rh
            }
        }
    }

    // # compare sums
    let heightSum = 0
    let arrSum = 0
    
    for (let num of height) heightSum += num
    for (let num of arr) arrSum += num
    
    return(arrSum - heightSum)
};



// # [0,1,0,2,1,0,1,3,2,1,2,1] = 14
// # [0,1,1,2,2,2,2,3,2,2,2,1] = 20
// # 6 water

// # [0,1,0,2,1,0,1,3,2,1,2,1] hold one pointer at fill height element
// #    ^ -> fill with 1
// # [0,1,1,2,1,0,1,3,2,1,2,1] when we get to equal or greater height, update fill height and switch pointer
// #        ^ -> fill with 2
// # [0,1,1,2,2,2,2,3,3,3,3,3] never got to anything bigger or equal
// #                ^ -> fill with 3
// # [0,1,1,2,2,2,2,3,2,2,2,x] step ahead to next smaller element and try again
// #                  ^   ^
// # [0,1,1,2,2,2,2,3,2,2,2,2] never find anything bigger or equal
// #                      ^
// # [0,1,1,2,2,2,2,3,2,2,2,1] at end, finish
// #                        ^

// # [0,1,1,2,2,2,2,3,2,2,2,1] two pointers, alternate to whichever is strictly less than