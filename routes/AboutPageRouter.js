// routes/AboutPageRouter.js
import express from "express";
import {
  createAboutPage,
  getAllAboutPages,
  getAboutPageById,
  updateAboutPage,
  deleteAboutPage,
} from "../controllers/aboutPage.controller.js";

const AboutPagerouter = express.Router();

// POST: Create
AboutPagerouter.post("/", createAboutPage);

// GET: All
AboutPagerouter.get("/", getAllAboutPages);

// GET: By ID
AboutPagerouter.get("/:id", getAboutPageById);

// PUT: Update by ID
AboutPagerouter.put("/:id", updateAboutPage);

// DELETE: By ID
AboutPagerouter.delete("/:id", deleteAboutPage);

export default AboutPagerouter;
