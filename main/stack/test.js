const stackProto = require('./stackProto');
const Stack = require('./stack');

const mystack = new stackProto();
const stack = new Stack();

mystack.push(1);
mystack.puh(5);
console.log(mystack.length);
console.log(mystack.pop())
console.log(mystack.length);
console.log(mystack.peek())
console.log(mystack.length);

const stack = new Stack();
stack.push(1);
stack.puh(5);
console.log(stack.length);
console.log(stack.pop())
console.log(stack.length);
console.log(stack.peek())
console.log(stack.length);