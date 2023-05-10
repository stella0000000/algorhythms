class MyCircularDeque {
    constructor(k) {
        this.queue = new Array()
        this.length = k
    }
    
    insertFront(value) {
        if (this.queue.length < this.length) {
            this.queue.unshift(value)
            return true
        }
        
        return false
    }
    
    insertLast(value) {
        if (this.queue.length < this.length) {
            this.queue.push(value)
            return true
        }
        
        return false
    }
    
    deleteFront() {
        if (this.queue.length > 0) {
            this.queue.shift()
            return true
        }
        
        return false
    }
    
    deleteLast() {
        if (this.queue.length > 0) {
            this.queue.pop()
            return true
        }
        
        return false
    }
    
    getFront() {
        if(this.queue.length === 0) {
            return -1
        } else {
            return this.queue[0]
        }
    }
    
    getRear() {
        if(this.queue.length === 0) {
            return -1
        } else {
            return this.queue[this.queue.length - 1]
        }
    }
    
    isEmpty() {
        return this.queue.length === 0
    }
    
    isFull() {
        return this.queue.length === this.length
    }
}