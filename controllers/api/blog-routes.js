const { Blog, Comment, User } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize');

// Create new blog - require login parameter

router.post('/', async (req, res) => {
    if(req.body.title) {
        res.json(req.body.title + " Whooooboy!")
    } else { 
        res.json("Ya Dun failed it1")
    }
})

// Edit blog - login required, no comments

module.exports = router;