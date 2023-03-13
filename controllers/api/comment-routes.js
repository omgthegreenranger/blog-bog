const router = require('express').Router();
const { Blog, Comment, User } = require('../../models');

// These require login as true and user "author" boolean as `true`.

// Create comment route - this is associated with the blog post ID.

router.post('/', async (req, res) => {
    try {
        console.log(req.body.name);
        const commentData = await Comment.create({
          comment: req.body.comment,
          blog_id: req.body.blog_id,
        });

        res.send(commentData)
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });


// Delete comment - only requires comment ID in this case.

module.exports = router;