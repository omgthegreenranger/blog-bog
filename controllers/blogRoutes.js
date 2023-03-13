const { Blog, Comment, User } = require('../models');
const router = require('express').Router();
const sequelize = require('sequelize');

// These require login as true and user "author" boolean as `true`.


// Find all Blogs, along with count of comments on the blog.

// router.get('/', async (req, res) => {
//     try {
//         const blogData = await Blog.findAll({
//             attributes: ['title', 'date', 'body', 'slugline', [comment.sequelize.literal("COUNT", sequelize.col('id')), 'Comments']], 
//             include: [{
//                 model: Comment,
//                 attributes: [id]
//                 },
//                 {
//                 model: User,
//                 attributes: ['username', 'email', 'id'],
//             }],
//             order: [['date', 'DESC']]
//         })
//         .then((data) => {
//             console.data();
//         })
//         const blogs = blogData.map((blog) => blog.get({ plain: true }));
//         res.render('homepage', { blogs });
//         // res.status(200).json(blogData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/:id', async (req, res) => {
  try {
      const blogData = await Blog.findByPk(req.params.id, {
          attributes: ['title', 'createdAt', 'body', 'slugline', 'id'],
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
      const blogs = await blogData.get({ plain: true });
      res.render('blog', blogs);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;