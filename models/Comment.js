const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    // Comment_ID 
    id: {
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
    comment:{
        // Comment body
        type: DataTypes.TEXT,
        allowNull: false,
    },
    // Commenter - user_id (one to many)
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    // BLOG ID for relationship
    // blog_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'blog',
    //         key: 'id'
    //     }
    // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;
