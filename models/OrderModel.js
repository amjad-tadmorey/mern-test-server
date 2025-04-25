const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        amount: String,
        client: String
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);


const Order = mongoose.model('orders', orderSchema);

module.exports = Order;