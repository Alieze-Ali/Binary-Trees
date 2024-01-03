/*
      6
     / \
    3   9
   
        
 queue = []
 output = [6,3,9]
Plan:
1. Initialize an empty queue and an empty output array
2. Enqueue the root inside the queue
3. While we have values inside the queue start serving these values; by serving we need 2 steps
  a. dequeue the node from the queue and push it to the output array
  b. enqueue all of the current nodes children to the queue
4. Once the queue is empty return the output
5. Attend Binary Trees Next Wednesday 7am

*/

class node {
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
    }
  }
  
  function traverse(root) {
    // Implement

    const queue = [];
    const output = [];

    queue.push(root)
    // while we have values inside the queue, that are greater than 0
    while (queue.length > 0){
      const currentNode = queue.shift();
      output.push(currentNode.value);
      if (currentNode.left){
        queue.push(currentNode.left)
      }
      if (currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return output; 
  }

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)

console.log(traverse(head)) // 6, 3, 9

// Implement a level-order breadth-first traversal for a binary tree using the provided class for a binary tree node.
// the return should be a list of values in the binary tree, based on a level-order (searching left to right at each "level") breadth-first traversal

// Hint: implementing BFS requires a queue data structure.
// For a quick and easy queue implementation:
// const queue = []
// then queue.push(value) to enqueue and queue.shift() to dequeue


