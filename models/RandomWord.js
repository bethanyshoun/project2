const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RandomWord extends Model { }

RandomWord.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'random_word'
    }
);

module.exports = RandomWord;
