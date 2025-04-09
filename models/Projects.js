import { DataTypes } from "sequelize";

const ProjectModel = (sequelize) =>
  sequelize.define("Project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    techs: {
      type: DataTypes.JSON, // ✅ Fixed for MySQL
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

export default ProjectModel;
