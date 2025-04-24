const util1 = function () {
	console.log("I am a utitlity 1 and i do one task");
};

const util2 = function () {
	console.log("I am a utitlity 2 and i do 2 no. task");
};

exports.c = function () {
	console.log("Hello i am utitlity 3 and i do some task as well");
};

exports.a = util1;
exports.b = util2;

module.exports = function () {
	console.log(
		"I also do something but unfortunately i think there will be some error now"
	);
};
