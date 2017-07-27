//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');
const router = express.Router();
const mongoose = ('mongoose');
const Donut = require("../models/donuts.js");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res) => {
    Donut.find({})
        .then( (donuts) => {
            res.render('donuts/index', {
                donuts: donuts
            })
        })
        .catch( (error) => {
            console.log('Error retrieving donuts from database.');
            console.log(error);
        })
});
//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req, res) => {
    res.render('donuts/new')
});
//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (req, res) => {
    const donutId = req.params.id
    Donut.findById(donutId)
        .then( (donut) => {
            res.render('donuts/edit', {
                donut: donut
            })
        })
        .catch( (error) => {
            console.log('Error retrieving donut from database.');
            console.log(error);
        })
})

//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (req, res) => {
    const updateDonutId = req.params.id;
    const updateDonut = req.body;
    Donut.findByIdAndUpdate(
        updateDonutId,
        updateDonut,
        { new: true }
    )
        .then( (donut) => {
            console.log(`Donut with id ${donut._id} was updated`);
            res.render('donuts/show', {
                donut: donut
            })
        })
        .catch( (error) => {
            console.log(`Donut with id ${donut._id} failed to update`);
            console.log(error);
        })
});

//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req, res) => {
    const donutId = req.params.id
    Donut.findById(donutId)
        .then( (donut) => {
            res.render('donuts/show', {
                donut: donut
            })
        })
        .catch( (error) => {
            console.log('Error retrieving donut from database.');
            console.log(error);
        })
});

//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (req, res) => {
    const newDonut = req.body;
    Donut.create(newDonut)
        .then( (donut) => {
            res.render('donuts/show', {
                donut: donut
            })
        })       
        .catch( (error) => {
            console.log('Error creating donut for database.');
            console.log(error);
        })
});



//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.get('/:id/delete', (req, res) => {
    const donutId = req.params.id;
    Donut.findByIdAndRemove(donutId)
        .then( () => {
            console.log(`Deleted donut with id ${donutId}`);
            res.redirect('/');
        })
})

//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;