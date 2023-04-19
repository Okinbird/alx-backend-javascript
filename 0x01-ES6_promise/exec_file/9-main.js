import guardrail from '/home/okinamos/alx-backend-javascript/0x01-ES6_promise/9-try';
import divideFunction from '/home/okinamos/alx-backend-javascript/0x01-ES6_promise/8-try';

console.log(guardrail(() => { return divideFunction(10, 2)}));
console.log(guardrail(() => { return divideFunction(10, 0)}));
