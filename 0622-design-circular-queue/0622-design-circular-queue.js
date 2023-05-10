class MyCircularQueue {
    constructor(k) {
        this.queue = new Array()
        this.capacity = k
        this.length = 0
        this.front = 0
        this.back = -1
    }
    
    enQueue(value) {
        if (this.length >= this.capacity) return false
        this.back++
        this.queue[this.back % this.capacity] = value
        this.length++
        return true
    }
    
    deQueue() {
        if (this.isEmpty()) return false
        // const value = this.Front()
        // this.queue[this.front % this.capacity] = null
        this.front++
        this.length--
        return true
    }
    
    Front() {
        if (this.isEmpty()) return -1
        return this.queue[this.front % this.capacity]
    }
    
    Rear() {
        if (this.isEmpty()) return -1
        return this.queue[this.back % this.capacity]
    }
    
    isEmpty() {
        return this.length === 0
    }
    
    isFull() {
        return this.capacity === this.length
    }
}
