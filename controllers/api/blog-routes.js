const { Blog, Comment, User } = require('../../models');
const router = require('express').Router();

// These require login as true and user "author" boolean as `true`.


// Find all Blogs, along with count of comments on the blog.

router.get('/', async (req, res) => {
    const blogData = await Blog.findAll({
        attributes:{   
            include: [[sequelize.fn("COUNT", sequelize.col("comments.id")), "Comments"]]
        },
        include: [{
            model: 'comment',
            attributes: []
        }]
    });

    res.render('main')

})

// Find one blog, include all comments for display at the bottom

router.get('/:id', async (req, res) => {
    const blogData = await Blog.findbyPk(req.params.id, {
        attributes:['title', 'slugline', 'body'],
        include: {
            model: 'comment',
            attributes: ['comment', 'user.username']
        },
        include: {
            model: 'user',
            attributes: ['name', 'email']
        }
    });

    res.render('main')

})

// Create new blog - require login parameter

// Edit blog - login required, no comments

module.exports = router;