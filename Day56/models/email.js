"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Email.belongsTo(models.User, { foreignKey: "user_id",as: "users" });
    }
  }
  Email.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.BOOLEAN,
      },
      to:{
        type:DataTypes.STRING(50)
      },
      title:{
        type:DataTypes.STRING(100)
      },
      message:{
        type:DataTypes.STRING(1000)
      }
    },
    {
      sequelize,
      modelName: "Email",
      tableName: "emails",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Email;
};
