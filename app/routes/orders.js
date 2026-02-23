// INDIANA ATWOOD

const express = require('express');
const router = express.Router();
const db = require('../dbms'); // Where DB lives
const mysql = require('mysql');

// Helper to turn "Jan" into 1, "Feb" into 2, etc.
const monthMap = {
    "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "Jun": 6,
    "Jul": 7, "Aug": 8, "Sept": 9, "Oct": 10, "Nov": 11, "Dec": 12
};

router.post('/', (req, res) => {
    const monthName = req.body.month;
    const monthInt = monthMap[monthName] || 1; // Default to 1 if not found

    console.log(`Fetching orders for: ${monthName} (Month #${monthInt})`);

    // SQL Query: Joins orders with toppings to get the name/price
    const sql = `
        SELECT t.name AS name,
	        COALESCE(SUM(o.quantity), 0) AS quantity
	        FROM toppings t
	    LEFT JOIN orders o
	        ON t.t_id = o.t_id
	        AND o.month = ${monthInt}
	        AND o.year = 2023
	    GROUP BY t.name
	    ORDER BY t.name;
    `;

    db.dbquery(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // 'results' is already an array of objects matching your old hard-coded structure
        // e.g., [{ topping: 'cherry', quantity: 2, notes: '...' }, ...]
        res.json(results);
    });
});

module.exports = router;

