const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');


// Comment has one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// User has many comments
User.hasMany(Comment);

// Blog has many comments
Blog.hasMany(Comment);

// Comment has one blog
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});


// User has many blogs
User.hasMany(Blog);

// Blog has one user

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Blog };
