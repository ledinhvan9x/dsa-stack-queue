// way 1
const stack = []

// Push (add to the top)
stack.push("A")
stack.push("B")
stack.push("C")

console.log(stack)
// ["A", "B", "C"]

// Peek (look at the top)
console.log(stack[stack.length - 1])
// C

// Pop (remove from the top)
const top = stack.pop()

console.log(top)
// C

console.log(stack)
// ["A", "B"]

// Size
console.log(stack.length)
// 2

// Is Empty
console.log(stack.length === 0)
// false

// way 2
class Stack {
    constructor() {
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop() {
        if (this.isEmpty()) return undefined
        return this.items.pop()
    }

    peek() {
        if (this.isEmpty()) return undefined
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}

// Best to worst: way 1 to way 2
