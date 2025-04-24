exports.a = "Hello";
exports.b = 22;
exports.c = function () {
	console.log("I am C");
};

module.exports = {
	x: 2,
	y: 3,
	z: "Hello",

	l: function () {
		console.log("i am inside l");
	},
};
