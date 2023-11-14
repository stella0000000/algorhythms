// counts # of hits in past 5 min, i.e. past 300 sec
// accept timestamp param (in seconds)
// calls made to system chronologically
// timestamp monotonically increasing
// several hits may arrive ~ at same time


var HitCounter = function() {
    this.queue = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    // this.hits[timestamp] ||= this.hits[timestamp] + 1
    this.queue.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
// remove timestamps with diff >= 300 from queue
// return size of queue
HitCounter.prototype.getHits = function(timestamp) {
    while (this.queue.length && timestamp - this.queue[0] >= 300) {
        this.queue.shift()
    }
    
    return this.queue.length
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */