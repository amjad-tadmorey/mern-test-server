require('dotenv').config();
const app = require('./app')

const port = process.env.PORT
const server = app.listen(port, () => {
    console.log(`Runing on port ${port}...${process.env.NODE_ENV}`);
})

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed gracefully');
    });
});