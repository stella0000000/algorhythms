/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {    
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')
        if(!map[s]) map[s] = []
        map[s].push(str)
    }

    return Object.values(map)
};

// m * n log n
// m = length of input string
// n * log n = sort

// hash map
// key is '1e, 1a, 1t': val is arr of anagrams
// '1e, 1a, 1t': ['eat', 'tea', 'ate']