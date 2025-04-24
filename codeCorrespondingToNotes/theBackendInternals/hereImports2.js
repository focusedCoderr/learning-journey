const { a, b, c } = require("./hereExports.js");

console.log(a);
console.log(b);
// c();

console.log(module.children[0].exports);
