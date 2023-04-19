'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip, Like }) {
      this.hasMany(Trip, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      login: { type: DataTypes.TEXT, unique: true, allowNull: false },
      password: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
