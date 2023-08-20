const express = require("express");
const app = express();
const phone = require("./data");

app.listen(3000, () => {
	console.log("started listening");
});

app.get("/", (req, res) => {
	console.log(req); 	 	
	res.send(`<h1>This is the Home Page</h1> <a href="/api/phone/">Phones</a>`);
});

app.post("/", (req, res) => {
	res.send("<h1>Got a POST request</h1>");
});

app.get("/api/phone/:phoneId", (req, res) => {
	console.log(req);
	console.log(res);
	const singleProduct = phone.find((product) => product.id === 1);
	if (!singleProduct) {
		res.status(404).send("Phone not found");
	}
	res.json(singleProduct);
});

app.get("*", (req, res) => {
	res.send(`<h1>Page Not found</h1>`);
});
