require('dotenv').config();
const app = require('./app')
const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .then(() => {

    })
    .catch((err) => console.log('Error connecting to MongoDB:', err));

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`Runing on port ${port}...${process.env.NODE_ENV}`);
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed gracefully');
    });
});