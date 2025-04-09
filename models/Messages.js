import { DataTypes } from "sequelize";

const MessageModel = (sequelize) =>
  sequelize.define("Message", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

export default MessageModel;
