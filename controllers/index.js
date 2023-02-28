const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes);
router.use('/user', userRoutes);

module.exports = router;