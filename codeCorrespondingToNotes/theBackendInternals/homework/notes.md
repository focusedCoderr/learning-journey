#### Understanding HTTP a little bit

```js
const server = http.createServer((req, res) => {
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
	}
});
```

In the above code: if someone sends a GET request on "/" --> response sent in 2 steps --> 1. headers & status is set 2. actual data is set.

I had doubt --> will they be sent sync or async --> 'writeHead' and 'end'--> setting the response --> once set nodejs internals will send the response --> headers are always sent first --> then body --> but both are sent via one packet or stream --> tcp protocol is used --> the client does not process until entire HTTP response (headers & body) is received.

My question was --> do we need to do await res.writeHead and await res.end --> answer : no --> because we're preparing response --> nodejs internals will send the response.
