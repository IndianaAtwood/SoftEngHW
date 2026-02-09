// INDIANA ATWOOD

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const month = req.body.month;
  console.log("Month requested:", month);

  // hard-coded values for every month
  const orders = [
    { topping: 'cherry', quantity: 2 },
    { topping: 'chocolate', quantity: 6 },
    { topping: 'plain', quantity: 3 }
  ];

  res.json(orders);   // sends JSON automatically
});

module.exports = router;
