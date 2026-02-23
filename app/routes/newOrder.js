// INDIANA ATWOOD

const express = require('express');
const router = express.Router();
const db = require('../dbms');

// POST /neworder
router.post('/', (req, res) => {
	const quantity = req.body.quantity;
	const topping = req.body.topping;
	const notes = req.body.notes || "None";

	const month = 1;
	const year = 2023;

	// SQL that posts new order to database
	const sql = `
		INSERT INTO orders (t_id, quantity, notes, month, year)
		VALUES (${topping}, ${quantity}, '${notes}', ${month}, ${year})
		`;
	db.dbquery(sql, function(err) {
		if(err) {
			console.error(err);
			return res.status(500).send("Insert failed");
		}

		res.json({ success:true });

	});
});

module.exports = router;
