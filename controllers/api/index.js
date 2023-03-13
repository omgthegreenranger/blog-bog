const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-routes');
const loginRoutes = require ('./login.js');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);
router.use('/login', loginRoutes);

module.exports = router;
