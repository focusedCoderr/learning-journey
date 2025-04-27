import http from "http";
const handlerfn = (req, res) => {
	const url = req.url;
	const method = req.method;

	if (method === "GET") {
		if (url === "/") {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({
					message: "Welcome to the home route",
				})
			);
		}
		if (url === "/about") {
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({
					message: "You are on the about us route",
				})
			);
		}
	}

	if (method === "POST") {
		if (url === "/") {
			let body = "";
			req.on("data", (chunks) => {
				body += chunks;
			});

			req.on("end", () => {
				try {
					const parsedData = JSON.parse(body);
					console.log("Received Data :", parsedData);

					res.writeHead(200, { "Content-Type": "application/json" });
					res.end(
						JSON.stringify({
							message: "Data recieved successfully",
							receivedData: parsedData,
						})
					);
				} catch (error) {
					res.writeHead(400, { "Content-Type": "application/json" });
					res.end(JSON.stringify({ message: "Invalid JSON data", error }));
				}
			});
		}

		if (url === "/about") {
			let body = "";
			req.on("data", (chunks) => {
				body += chunks;
			});

			req.on("end", () => {
				try {
					const parsedData = JSON.parse(body);
					console.log(`Recieved Data : ${parsedData}`);

					res.writeHead(200, { "Content-Type": "application/json" });
					res.end(
						JSON.stringify({
							message: "Data received successfully",
							receivedData: parsedData,
						})
					);
				} catch (err) {
					res.writeHead(400, { "Content-type": "application/json" });
					res.end(
						JSON.stringify({
							message: "Could not parse data. Send data in proper format",
							error: err,
						})
					);
				}
			});
		}
	}
};
const server = http.createServer();

server.on("request", handlerfn);
const PORT = process.env.HTTP_PORT || 4000;

server.listen(PORT, () => {
	console.log("Server is listening on port : ", PORT);
});
