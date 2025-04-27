import http from "http";

function myExpress() {
	const server = http.createServer();

	// server.on("request", handlerFunction);

	server.getCallPar = function (path, callbckfn) {
		server.on("request", (req, res) => {
			const url = req.url;
			const method = req.method;

			res.setMyStatus = function (statusCode) {
				res.writeHead(statusCode, { "Content-Type": "application/json" });
			};

			if (url === path && method === "GET") {
				callbckfn(req, res);
			}
		});
	};

	server.postCallPar = function (path, callbckfn) {
		server.on("request", (req, res) => {
			const url = req.url;
			const method = req.method;

			if (url === path && method === "POST") {
				callbckfn(req, res);
			}
		});
	};

	server.suno = function (port) {
		server.listen(port);
		return server;
	};
	server.aurPhir = function (callback) {
		callback("gaurav");
		return server;
	};
	return server;
}

export default myExpress;
