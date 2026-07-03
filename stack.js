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
