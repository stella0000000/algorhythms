/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // sort by A-B difference => ascending
    // this will give us [ [A << B] => [ mid ~ 0 ] => [ B << A] ]
    // send people to A from first half
    // send people to B from latter half

    let sum = 0
    const aIdx = 0
    const bIdx = 1

    const sorted = costs.sort((a, b) => (a[0]-a[1]) - (b[0]-b[1]))
    const mid = sorted.length / 2

    for (let i=0; i<sorted.length; i++) {
        if (i < mid) {   // first half to A
            sum += sorted[i][aIdx]
        } else {
            sum += sorted[i][bIdx]
        }
    }

    return sum
};