import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Authenticate DB
try {
  await sequelize.authenticate();
  console.log("✅ Database connected");
} catch (error) {
  console.error("❌ Unable to connect to the database:", error);
}

// Import models
import AboutPageModel from "./AboutPage.js";
import ProjectModel from "./Projects.js";
import MessageModel from "./Messages.js";

// Define models
const AboutPage = AboutPageModel(sequelize);
const Project = ProjectModel(sequelize);
const Message = MessageModel(sequelize);

await sequelize.sync(); // Or force: true if needed

export { sequelize, AboutPage, Project, Message };
