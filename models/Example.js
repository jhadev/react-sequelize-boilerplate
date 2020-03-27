const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Example model
class Example extends Model {}

// create fields/columns for Post model
Example.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
  { sequelize }
);

module.exports = Example;
