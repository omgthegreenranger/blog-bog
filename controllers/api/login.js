const { Blog, Comment, User } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize');

// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
      // adds id and first name to the session so that they can be displayed
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = dbUserData.get({ plain: true }).id;
        req.session.firstName = dbUserData.get({ plain: true }).first_name;
        res
          .status(200)
          .end();
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Logout
  router.post('/logout', (req, res) => {
    req.session.destroy(() => {
       res.status(204).end();
   })
  });
  
  
  router.delete('/:id', async (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    });
  });
  
  module.exports = router;