const { Blog, Comment, User } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize');

// These require login as true and user "author" boolean as `true`.


// Find all Blogs, along with count of comments on the blog.

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            attributes: ['title', 'date', 'slugline'],
            include: [{
                model: Comment
                }],
            include: [{
                model: User,
                attributes: ['username', 'email', 'id']
            }]
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
    // res.render('main')

});

// Find one blog, include all comments for display at the bottom

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            attributes: ['title', 'date', 'slugline', 'body', 'id'],
            include: [{
                model: Comment,
            },
            {
                model: User,
            }]
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
    // res.render('main')

})

// Create new blog - require login parameter

// Edit blog - login required, no comments

module.exports = router;