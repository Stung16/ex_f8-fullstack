"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Short_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Short_link.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      link_detail: DataTypes.STRING,
      link_short: DataTypes.STRING,
      password: DataTypes.STRING,
      safe_link: DataTypes.BOOLEAN,
      access_times: DataTypes.INTEGER,
      id_custom: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Short_link",
      tableName: "short_links",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Short_link;
};
