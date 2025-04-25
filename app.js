const express = require('express')
const morgan = require('morgan')
const orderRouter = require('./routes/ordersRoute');
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/orders', orderRouter);
module.exports = app