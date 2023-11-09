/**
 * @param {number} n
 */

/*
    queue like DS moves most recently used element to end of queue
*/

var MRUQueue = function(n) {
    this.q = new Array()
    
    for (let i=0; i<n+1; i++) {
        this.q.push(i)
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    // [1 2 3 k 5]
    // [1 2 3 5 k]
    // [LRU ... to MRU]
    for (let i=k; i<this.q.length-1; i++) {
        [this.q[i], this.q[i+1]] = [this.q[i+1], this.q[i]]
    }
    
    return this.q[this.q.length-1]
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */