import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

// Initialize sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Import models after sequelize is initialized
import { DataTypes } from "sequelize";

// Define models
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

// Test the connection
try {
  await sequelize.authenticate();
  console.log("✅ Database connected");
} catch (error) {
  console.error("❌ Unable to connect to the database:", error);
}

// Export sequelize and models
export { sequelize, AboutPage };
