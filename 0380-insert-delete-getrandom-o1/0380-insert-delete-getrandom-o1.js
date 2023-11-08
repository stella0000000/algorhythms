class RandomizedSet {
    constructor() {
        this.map = {}
            // arr[idx]: idx
            // val: idx
        this.arr = []
    }
    
    insert(val) {
        if (val in this.map) return false
        
        this.arr.push(val)
        this.map[val] = this.arr.length-1
        
        return true
    }
    
    remove(val) {    
        if (!(val in this.map)) return false
        
        let idx = this.map[val];
        let lastIdx = this.arr.length - 1;
        [this.arr[idx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[idx]];
        // [1 2 3], [3 2 1]
        // map[1] = 0
        
        this.arr.pop()
        this.map[this.arr[idx]] = idx
        delete this.map[val]
        
        return true
    }
    
    getRandom() {
        let rand = Math.floor(Math.random() * this.arr.length)
        return this.arr[rand]
    }
}


// /*
//  [ 0 1 
//    2 3 ]
   
//    obj: { i:
//             {
//                 j: val
//             }
            
//    for (let r=0; r<matrix.length; r++) {
//         if (!(r in obj)) obj[r] = {}
//         for (let c=0; c<matrix[0].length; c++)
//             if (!(c in obj[r]))
//             obj[r][c] = matrix[r][c]
//         }
//    }
// */

// class RandomizedSet {
//     constructor() {
//         this.map = new Map() // arr[idx]: idx
//                              // val: idx
//         this.arr = new Array()
//     }
    
//     insert(val) {
//         if (this.map.has(val)) return false
//         this.arr.push(val)
//         this.map.set(val, this.arr.length-1)
//         return true
//     }
    
//     remove(val) {
//         if (!this.map.has(val)) return false
        
//         let idx = this.map.get(val);
//         [this.arr[idx], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[idx]]
        
//         // [ arr[idx], arr[last] ]
//         // [ arr[last, arr[idx] ] // so we can pop arr, which will remove arr[idx]=val
        
//         // UPDATE MAP
//         this.map.set(this.arr[idx], idx)
        
//         this.arr.pop()
//         this.map.delete(idx)
//         // swap last arr val + arr[idx] @ val
//         return true
//     }
    
//     getRandom() {
//         let randIdx = Math.floor(Math.random() * this.arr.length)
//         return this.arr[randIdx]
//     }
// }

// // class RandomizedSet {
// //     constructor() {
// //         this.arr = new Array()
// //         this.map = new Map()
// //         // { arr[idx]: idx}
// //     }

// //     insert(val) {
// //         if (this.map.has(val)) return false
// //         this.arr.push(val)
// //         this.map.set(val, this.arr.length-1)
// //         return true
// //     }

// //     remove(val) {
// //         if (!this.map.has(val)) return false
// //         const idx = this.map.get(val);

// //         [this.arr[idx], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[idx]]
// //         // [ arr[idx], arr[last] ]
// //         // [ arr[last, arr[idx] ]

// //         this.map.set(this.arr[idx], idx)
        
// //         this.arr.pop()
// //         this.map.delete(idx)
// //         return true
// //         // swap last arr val + arr[idx] @ val
// //         // pop arr
// //         // delete from map
// //         // adjust map from arr swap
// //     }

// //     getRandom() {
// //         const random = Math.floor(Math.random()*this.arr.length)
// //         return this.arr[random]
// //     }
// // }