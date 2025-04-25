const Order = require('../models/OrderModel')
const catchAsync = require('../utils/catchAsync')

exports.getAllOrders = catchAsync(async (req, res, next) => {

    const orders = await Order.find();
    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: orders.length,
        data: {
            orders
        }
    });
});

exports.addOrder = catchAsync(async (req, res, next) => {

    const newOrder = await Order.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            order: newOrder
        }
    });
});