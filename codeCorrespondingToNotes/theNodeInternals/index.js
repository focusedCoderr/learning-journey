const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 1 hashed`);
});

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 2 hashed`);
});

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 3 hashed`);
});

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 4 hashed`);
});

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 5 hashed`);
});

crypto.pbkdf2("passsword", "salt1", 100000, 1024, "sha512", (err, data) => {
	console.log(`[${Date.now() - start}ms]: Password 6 hashed`);
});

// console.log("Hello");

// setTimeout(() => console.log("I am set timeout"), 0);
// setImmediate(() => console.log("I am set immediate"));

// fs.readFile("sample.txt", "utf-8", function (err, data) {
// 	setTimeout(() => console.log("SetTimeout inside FS"), 0);
// 	setImmediate(() => console.log("Immediate inside FS"));

//
// });

// console.log("bye");
