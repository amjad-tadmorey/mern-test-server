require('dotenv').config();
const app = require('./app')
const mongoose = require('mongoose');


mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('✅ DB connection successful!'))
    .catch((err) => {
        console.error('❌ DB connection failed: ', err);
        process.exit(1);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed gracefully');
    });
});