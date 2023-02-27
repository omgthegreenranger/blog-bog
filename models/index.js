const User = require('./User');
const Comment = require('./Comment');
const Blog = require('./Blog');


// Comment has one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// User has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Blog has many comments
Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

// Comment has one blog
Comment.belongsTo(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE',
});


// User has many blogs
User.hasMany(Blog, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

// Blog has one user

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Blog };
