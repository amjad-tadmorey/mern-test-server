// routes/test.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('🔥 Request to /api/test received');
    res.send('API Test OK!');
});

module.exports = router;
