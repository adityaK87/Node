//creating a  server using Node

const http = require("http");

const server = http.createServer((req, res) => {
	res.write("<h1>Server is created using Node</h1>");
	res.end();
});

server.listen(4500, "localhost", () => {
	console.log("Server has been listening on port 4500");
});
