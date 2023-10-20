/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// transformation sequence
// beginWord: str => endWord: str
// wordList[]: i to k
    // adjacent pairs differ by 1 char
    // s_k = endWord
// return: # of words in shortest transformation sequence || 0
var ladderLength = function(beginWord, endWord, wordList) {
    // loop through wordList
        // check if 1 char is off
        // check if begin word is in dictionary

    const wordSet = new Set(wordList)
    if (!wordSet.has(endWord)) return 0
    
    let count = 1
    const queue = [ beginWord ]

    while (queue.length > 0) {
        let queueLength = queue.length

        for (let i=0; i<queueLength; i++) {
            const currWord = queue.shift()
            if (currWord === endWord) return count

            for (let word of wordSet) {
                if (!offBySingleLetter(currWord, word)) continue
                queue.push(word)
                wordSet.delete(word)
            }
        }
        count++
    }

    return 0
};

const offBySingleLetter = (word1, word2) => {
    let i=0
    let j=0
    let count = 0
    
    while (i < word1.length) {
        if (word1[i] !== word2[j]) count++
        i++
        j++
    }
    
    return count === 1
    
    // const set1 = new Set(word1.split(''))
    // let count = 0
    // for (let char of word2) {
    //     if (!set1.has(char)) count++
    //     if (count > 1) return false
    // }
    // return count === 1
}