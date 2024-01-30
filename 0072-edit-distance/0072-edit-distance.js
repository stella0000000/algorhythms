/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const dp = initDp(word1, word2)
    fillDp(dp, word1, word2)
    console.log(dp)
    return dp[0][0]     // bottom up
}

const initDp = (w1, w2) => {
    const dp = []
    
    for (let i=0; i<=w1.length; i++) {
        dp[i] = new Array(w2.length+1).fill(Infinity)   // Inf bc we need min
    }
    
    for (let row=0; row<=w1.length; row++) {
        // each char of w1
        // empty w2
        dp[row][w2.length] = w1.length-row
    }
    
    for (let col=0; col<=w2.length; col++) {
        // each char of w2
        // empty w1
        dp[w1.length][col] = w2.length-col
    }
    
    return dp
}

const fillDp = (dp, w1, w2) => {
    const m = w1.length
    const n = w2.length
    
	for (let i=m-1; i>=0; i--) {
		for (let j=n-1; j>=0; j--) {
			if (w1[i] === w2[j]) {
                dp[i][j] = dp[i+1][j+1]
            } else {
                const ins = dp[i][j+1]
                const del = dp[i+1][j]
                const rep = dp[i+1][j+1]
                dp[i][j] = 1 + Math.min(ins, del, rep)
            }
		}
	}
}

/*
  x = comparing cd, bd = min ops to make them equal
  extra row, col are for base cases
  y = empty w2, entire w1, so min ops is length of nonempty string w1
  
    a c d _
  a       y
  b   x
  d
  _       0


*/