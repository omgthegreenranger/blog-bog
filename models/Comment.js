const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    // Comment_ID 
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    // Date posted
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    body:{
        // Comment body
    },
    blog_id: {
        // blog_id (one to many)
        type: DataTypes.INTEGER,
        references: {
            model: 'blog',
            key: 'id'
        }
    },
    // Commenter - user_id (one to many)
    user_id: {
        type: DataTypes.INTEGER
        references: {
            model: 'user',
            key: 'id'
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
    }
);

module.exports = Comment;
