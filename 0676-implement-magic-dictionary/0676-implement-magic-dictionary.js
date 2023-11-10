
var MagicDictionary = function() {
    this.graph = {}
};

const oneLetterDiff = (w1, w2) => {
    if (w1.length !== w2.length) return false
    let diff = 0
    
    for (let i=0; i<w1.length; i++) {
        if (w1[i] !== w2[i]) diff++
    }
    
    return diff === 1
}

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for (const word of dictionary) {
        if (!this.graph[word]) this.graph[word] = new Set()
    }
    
    for (const word in this.graph) {
        for (const word2 of dictionary) {
            if (oneLetterDiff(word, word2)) this.graph[word].add(word2)
        }
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for (const word in this.graph) {
        if (oneLetterDiff(searchWord, word)) return true
    }
    return false
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */




// // data structure
//     // initialized with list of diff't words
//     // provided string
//     // determine if you can change exacty 1 char in str
//     // to match any word in data structure

// class TrieNode {
//     constructor() {
//         this.children = {}
//         this.endWord = false
//     }
// }

// var MagicDictionary = function() {
//     this.root = new TrieNode()
// };

// /** 
//  * @param {string[]} dictionary
//  * @return {void}
//  */
// MagicDictionary.prototype.buildDict = function(dictionary) {
//     for (const word of dictionary) {
//         let node = this.root
//         for (let char of word) {
//             if (!(char in node.children)) {
//                 node.children[char] = new TrieNode()
//             }
            
//             node = node.children[char]
//         }
//         // we built one entire word
//         node.endWord = true
//     }
//     // console.log(this.root.children['h'].children['e'].children['l'].children['l'])
// };

// /** 
//  * @param {string} searchWord
//  * @return {boolean}
//  */
// MagicDictionary.prototype.search = function(searchWord) {
//     // return true if you can change ONE char in searchWord
//     // to match any string in DS
//     // else false
    
//     const q = [ [this.root, 0, 0] ]
//     // root: h: e: l: l: o
    
//     while (q.length) {
//         const [ node, i, diff ] = q.shift()
//         const char = searchWord[i]
        
//         if (!char && !node.children) {
//             if (diff === 1) return true
//             return false
//         }
        
//         if (!node.children) {
//             if (diff === 1) return true
//             return false
//         }
        
//         if (!char) return false
        
//         if (char in node.children) {
//             q.push([ node.children[char], i+1, diff ])
//         } else {
//             for (const child in node.children) {
//                 q.push([ child, i+1, diff+1 ])
//             }
//         }
//     }
    
//     return false
// };

// // 'hi', 'xi'

// /** 
//  * Your MagicDictionary object will be instantiated and called as such:
//  * var obj = new MagicDictionary()
//  * obj.buildDict(dictionary)
//  * var param_2 = obj.search(searchWord)
//  */