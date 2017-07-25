var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => {
    User.find({})
        .then((users) => {
            res.render('users/index', {
                users: users
            });
        })
        .catch((error) => {
            console.log(`ERROR!!! ${error}`);
        });
    
})

// USER CREATE FORM
router.get('/new', (req,res) => {
    res.render('users/new')
});

// USER CREATE ROUTE
router.post('/', (req, res) => {
    const newUser = new User(req.body);
    newUser.save(((error) => {
        if (error) {
            console.log('Error saving new user to database!');
        }
    }))
});

// USER SHOW ROUTE
// 597798bafa31392a368d5f28
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            res.render('users/show', {
                user: user
            })
        })
});

// USER DESTROY
router.get('/:id/delete', (req, res) =>  {
    const userIdToDelete = req.params.id;
    User.findByIdAndRemove(userIdToDelete)
        .then(() => {
            console.log(`Successfully deleted user with ID ${userIdToDelete}`);
            res.redirect('/users');
        })
});
// USER UPDATE ROUTE
router.get('/:id/edit', (req, res) => {
    const userIdToFind = req.params.id;
    User.findById(userIdToFind)
        .then((user) => {
            res.render('users/edit', {
                user: user
            })
        })
});

router.put('/:id', (req, res) => {
    const userIdtoUpdate = req.params.id
    const updatedUserInfo = req.body;
    User.findByIdAndUpdate(
        userIdtoUpdate, 
        updatedUserInfo,
        {new: true}
    ).then((user) => {
        console.log(`user with ID of ${user._id} updated!`);
        res.render('users/show', {
            user
        })
        .catch((error) => {
            console.log('Error')
        })
    })
});
// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
