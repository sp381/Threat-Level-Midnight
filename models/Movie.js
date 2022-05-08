const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model { }

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    movie_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment_text: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
        key: "id"
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'movie'
  }
);

module.exports = Movie;