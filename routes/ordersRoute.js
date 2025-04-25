// routes/test.js
const express = require('express');
const { getAllOrders, addOrder } = require('../controllers/ordersController')
const router = express.Router();


router.get('/', getAllOrders);
router.post('/', addOrder);

module.exports = router;
