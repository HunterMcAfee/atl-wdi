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

router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    const pirateToEdit = pirates[id];
    res.render('edit', {
        id: id,
        data: pirateToEdit
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('show', {
        data: pirates[id],
        id: id
    });
}); 

router.delete('/:id', (req, res) => {
    const id = req.params.id
    pirates.splice(id, 1);
    res.redirect('/pirates');
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const pirateToEdit = pirates[id];
    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;
    res.redirect(`/pirates/${id}`);
});

router.post('/', (req, res) => {
    const createdPirate = req.body;
    console.log(createdPirate);
    pirates.push(createdPirate);
    res.redirect('/pirates');
});

module.exports = router;