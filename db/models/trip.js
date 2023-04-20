'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Like }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'trip_id' });
    }
  }
  Trip.init(
    {
      map: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      trip_length: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      trip_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        creator: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
    },
    {
      sequelize,
      modelName: 'Trip',
    },
  );
  return Trip;
};
