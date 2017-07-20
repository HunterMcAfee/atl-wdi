//your code below
const express = require('express');
const router = express.Router();
const pirates = require('../models/pirates');

router.get('/', (req, res) => {
    res.render('index', {
        data: pirates
    });
});

router.get('/new', (req, res) => {
    res.render('new');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('show', {
        data: pirates[id]
    });
});

router.post('/', (req, res) => {
    const createdPirate = req.body;
    console.log(createdPirate);
    pirates.push(createdPirate);
    res.redirect('/pirates');
});

module.exports = router;