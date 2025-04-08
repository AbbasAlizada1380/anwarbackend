import { DataTypes } from "sequelize";
import { sequelize } from "./index.js"; // Import sequelize after it is initialized in index.js

const AboutPage = sequelize.define("AboutPage", {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  smallImage: {
    type: DataTypes.STRING, // Assuming it's a URL or file path
    allowNull: true,
  },
  largeImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  resume: {
    type: DataTypes.STRING, // Assuming it's a URL or file path to the PDF
    allowNull: true,
  },
});

export default AboutPage;
