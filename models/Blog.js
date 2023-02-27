const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
        id: {
            // Blog_ID (One to many)
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            // Blog Title
            type: DataTypes.STRING,
            allowNull: false,
        },
        slugline: {
            // slugline (short paragraph of post)
            type: DataTypes.TEXT,
            allowNull: true,
        },
        date: {
            // Post Date
            type: DataTypes.DATE,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        body: {
            type: DataTypes.TEXT('long'),
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;
