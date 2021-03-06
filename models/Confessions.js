const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Confession extends Model {}

Confession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
       
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Confessions',
    }
);

module.exports = Confession;