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