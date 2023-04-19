'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Trip }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Trip, { foreignKey: 'trip_id' });
    }
  }
  Like.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      trip_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Trips',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
