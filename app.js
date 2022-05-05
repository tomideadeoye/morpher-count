const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var router = express.Router();

var countRouter = require("./routes/count");

const PORT = 4000;
const HOST = "0.0.0.0";

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use("/app", express.static(__dirname + "/counter-ui/dist"));

router.get("/", function (req, res, next) {
	res.json({ message: "this works well" });
});

app.use("/count", countRouter);

app.use(bodyParser.json());

app.listen(PORT, HOST);
console.log(`Running on https://${HOST}:${PORT}`);

module.exports = app;
