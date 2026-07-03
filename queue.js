// way 1
class Queue {
    constructor() {
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(value) {
        this.items[this.rear] = value
        this.rear++
    }

    dequeue() {
        if (this.isEmpty()) return undefined

        const value = this.items[this.front]
        delete this.items[this.front]
        this.front++

        return value
    }

    peek() {
        return this.items[this.front]
    }

    isEmpty() {
        return this.rear === this.front
    }

    size() {
        return this.rear - this.front
    }
}

// way 2
class Queue {
    constructor() {
        this.items = []
        this.head = 0
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        return this.items[this.head++]
    }

    peek() {
        return this.items[this.head]
    }
}

// way 3
const queue = []

// Enqueue
queue.push("A")
queue.push("B")
queue.push("C")

console.log(queue)
// ["A", "B", "C"]

// Peek
console.log(queue[0])
// A

// Dequeue
const first = queue.shift()

console.log(first)
// A

console.log(queue)
// ["B", "C"]

// Best to worst: way 1 to way 2 to way 3
