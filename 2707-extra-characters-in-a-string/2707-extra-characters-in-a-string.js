/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

// break given string, s, length n
// into non-overlapping substrings
// each substring is present in dictionary
// minimize extra chars left over after string is broken optimally
// max num chars possibly left over is n
// where we find no match in dictionary + all chars must be removed


var minExtraChar = function (s, dictionary) {
    const dp = new Array(s.length).fill(Infinity)
    dp[0] = 0

    for(let i = 1; i <= s.length; ++i) {
        dp[i] = dp[i - 1] + 1

        for(const word of dictionary){
            if(i >= word.length && s.slice(i - word.length, i) === word){
                dp[i] = Math.min(dp[i], dp[i - word.length])
            }
        }
    }

    return dp[s.length]
}