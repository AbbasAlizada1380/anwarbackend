import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/project.controller.js";

const projectRouter = express.Router();

// POST: Create
projectRouter.post("/", createProject);

// GET: All
projectRouter.get("/", getAllProjects);

// GET: By ID
projectRouter.get("/:id", getProjectById);

// PUT: Update by ID
projectRouter.put("/:id", updateProject);

// DELETE: By ID
projectRouter.delete("/:id", deleteProject);

export default projectRouter;
