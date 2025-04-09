import express from "express";
import {sequelize} from "./models/index.js";
import AboutPageRouter from "./routes/AboutPageRouter.js";
import projectRouter from "./routes/ProjectRouter.js";
import MessageRouter from "./routes/MessageRouter.js"
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/AboutPage", AboutPageRouter);
app.use("/Project", projectRouter);
app.use("/Message", MessageRouter);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);

  try {
    await sequelize.sync(); // optionally use { force: true } or { alter: true }
    console.log("✅ Database synced");
  } catch (err) {
    console.error("❌ Database sync failed:", err);
  }
});
