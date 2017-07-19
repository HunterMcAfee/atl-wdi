const express = require('express');
const router = express.Router();

router.get ('/:type', (req, res, next) => {
    res.render('../views/toppings', {
        message: `${req.params.type} pizza! Good choice.`
    });
});

module.exports = router;