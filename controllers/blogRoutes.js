const { Blog, Comment, User } = require('../models');
const router = require('express').Router();
const sequelize = require('sequelize');

// These require login as true and user "author" boolean as `true`.


// Find all Blogs, along with count of comments on the blog.

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            attributes: ['title', 'date', 'slugline', [comment.sequelize.literal("COUNT", sequelize.col('id')), 'Comments']], 
            include: [{
                model: Comment,
                attributes: [id]
                },
                {
                model: User,
                attributes: ['username', 'email', 'id'],
            }],
        });
        console.log(blogData);
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', { blogs });
        // res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Find one blog, include all comments for display at the bottom
router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            attributes: ['title', 'date', 'slugline', 'body', 'id'],
            include: [{
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['username', 'email', 'id'],
                }]
            },
            {
                model: User,
                attributes: ['username', 'email', 'id']
            }]
        });
        const blogs = blogData.get({ plain: true });        
        console.log(blogs);
        res.render('blog', blogs);
        // res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json(err);
    }

});

// Create new blog - require login parameter

// Edit blog - login required, no comments

module.exports = router;