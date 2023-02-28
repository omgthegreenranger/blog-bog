const { Blog, Comment, User } = require('../models');
const router = require('express').Router();
const sequelize = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
        attributes: ['title', 'date', 'slugline', 'id'],
        include: [{
            model: Comment,
            attributes: ['id', 'comment']
            },
            {
            model: User,
            attributes: ['username', 'email', 'id']
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

router.get('/blog/:id', async (req, res) => {
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



module.exports = router;
