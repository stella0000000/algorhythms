/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// n piles of bananas
// ith pile has piles[i] bananas
// h hours
// k bananas/hr
// return => min k so she can eat all bananas within h hrs

//O(n * m), n is length of piles, m is max num in pile
// bsearch O(n logm)
var minEatingSpeed = function (piles, h) {
    let [left, right] = [1, Math.max(...piles)]
    
    while (left < right) {
        // const mid = (left + right) >> 1 // bit shift!!!!!
        const mid = Math.floor((left + right)/2)
        const hourSpent = getHourSpent(mid, piles)

        // eating too slowly
        // continue searching RIGHT
        const isTargetGreater = h < hourSpent
        if (isTargetGreater) left = mid + 1

        // eating too quickly or ok
        // keep searching LEFT
        const isTargetLess = hourSpent <= h
        if (isTargetLess) right = mid
    }

    return right
}

const getHourSpent = (mid, piles) => {
    let hourSpent = 0
    for (const bananas of piles) {
        hourSpent += Math.ceil(bananas / mid)
    }

    return hourSpent
}


// 3 2 7 11
// 3 2 3 11
// 3 2 3 7
// 0 2 3 7
// 0 2 3 3
// 0 0 3 3
// 0 0 0 3
// 0 0 0 0