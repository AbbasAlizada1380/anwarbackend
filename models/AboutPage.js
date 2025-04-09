import { DataTypes } from "sequelize";

const AboutPageModel = (sequelize) =>
  sequelize.define("AboutPage", {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    smallImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    largeImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

export default AboutPageModel;
