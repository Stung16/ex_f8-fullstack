"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Device.belongsTo(models.User, { foreignKey: "user_id",as: "users" });
    }
  }
  Device.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      browser: {
        type: DataTypes.STRING,
      },
      login_time: {
        type: DataTypes.DATE,
      },
      login_last: {
        type: DataTypes.DATE,
      },
      token: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "Device",
      tableName: "device",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Device;
};
