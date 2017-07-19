const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/index', {
        message: 'Welcome to Pizza Express!'
    });
});

module.exports = router;