const stackProto = require('./main/stack/stack');


const mystack = new stackProto();

mystack.push(1);
mystack.push(5);
console.log(mystack.length());
console.log(mystack.pop())
console.log(mystack.length());
console.log(mystack.peek())
console.log(mystack.length());