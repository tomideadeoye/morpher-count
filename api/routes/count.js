var express = require("express");
var router = express.Router();
const db = require("./db");
const config = require("../config");

router.get("/", async function (req, res, next) {
	const result = await db.query("SELECT id, count FROM count");
	const data = result[0].count;

	try {
		res.json({
			message: data,
		});
	} catch (err) {
		console.error(`Error while getting data`, err.message);
		next(err);
	}
});

router.post("/", async function (req, res, next) {
	console.log("about to write to db", req.body.message);
	count = req.body.message;

	try {
		await db.query(`UPDATE count SET count = ${count} WHERE id = 1`);
	} catch (error) {}
});

module.exports = router;
