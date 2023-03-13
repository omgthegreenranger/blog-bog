const { Blog, Comment, User } = require('../models');
const router = require('express').Router();
const sequelize = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        attributes: ['title', 'createdAt', 'slugline', 'id'],
        include: [{
            model: Comment,
            attributes: ['id', 'comment']
            },
            {
            model: User,
            attributes: ['username', 'email', 'id']
        }],
         });
    
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('homepage', { blogs });  
  } catch (err) {
    res.render('homepage');
}

});

router.get('/submit', async(req, res) => {
    res.render('submit')
});

module.exports = router;
