const { Blog, Comment, User } = require('../models');
const router = require('express').Router();
const sequelize = require('sequelize');


// user sign-in route to provide login credentials.

// Get user profile - show biographical data and also grab all blogs/comments to display.
// allow access to editing own blog posts and deleting own comments
// Find one blog, include all comments for display at the bottom

router.get('/', async (req,res) => {
    try {
        const userData = await User.findAll({
            attributes: ['first_name', 'last_name', 'username', 'email', 'id', 'author'],
            include: [{
                model: Comment,
                attributes: ['comment', 'id', 'date']
            },
            {
                model: Blog,
                attributes: ['title', 'slugline', 'date', 'id']
            }]
        });
        const users = userData.map((user) => user.get({ plain: true }));
        
        res.render('user', {users});
        console.log(userData)
        // res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            attributes: ['first_name', 'last_name', 'username', 'email', 'id', 'author'],
            include: [{
                model: Comment,
                attributes: ['comment', 'id', 'date']
            },
            {
                model: Blog,
                attributes: ['title', 'slugline', 'date', 'id']
            }]
        });
        const users = userData.get({ plain: true });  
        console.log(userData)      
        res.render('user', users);
        // res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create new blog - require login parameter

// Edit blog - login required, no comments

module.exports = router;