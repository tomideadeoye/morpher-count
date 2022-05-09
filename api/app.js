const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var countRouter = require("./routes/count");

const PORT = process.env.PORT || 3000;
const message = process.env.Message || "Built by Tomide with ♡ ";

var app = express();
app.use(
	cors({
		origin: "*",
	})
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(function (req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	next();
// });

app.use("/", express.static(path.join(__dirname, "counter-ui", "dist")));
app.get("/", function (req, res, next) {
	res.sendFile(__dirname, "counter-ui", "dist", "index.html");
});
app.use("/count", countRouter);
app.use(bodyParser.json());

app.listen(PORT);
console.log(`Running on https://${PORT}`);

module.exports = app;
