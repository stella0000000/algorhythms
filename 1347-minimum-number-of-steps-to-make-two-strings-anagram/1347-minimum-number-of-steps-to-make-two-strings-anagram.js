/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    /*  create a hashMap for s iterate throgh t 
        and check how many letters are missing
		O(N) - time
		O(1) - space, since there are only 26 letters in the alphabet
    */

    let hash = {}
    for (let letter of s) {
        if (!hash[letter]) hash[letter] = 0
        hash[letter]++
    }

    let changes = 0
    for (let letter of t) {
        if (hash[letter]) hash[letter]--
        else changes++
    }
    return changes
};