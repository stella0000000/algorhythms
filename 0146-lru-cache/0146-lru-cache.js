/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.arr = [] // order of keys
        // index is LRU to MRU
        // val is the key in map
    this.size = 0
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.cache) {
        // modify array of key ordering
        let idx = this.arr.indexOf(key)
        this.arr.splice(idx, 1)
        this.arr.push(key)
        
        return this.cache[key]
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // if it exceeds capacity
        // we remove LRU
        // add new one
    if (key in this.cache) {
        this.cache[key] = value
        let idx = this.arr.indexOf(key)
        this.arr.splice(idx, 1)
        this.arr.push(key)
    } else if (this.size >= this.capacity) {
        // evict lru
        const lruKey = this.arr[0]
        delete this.cache[lruKey]
        this.cache[key] = value
        this.arr.shift()
        this.arr.push(key)
    } else {
        this.cache[key] = value
        this.arr.push(key)
        this.size++
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */