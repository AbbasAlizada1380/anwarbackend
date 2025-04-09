import { Project } from "../models/index.js";

// Create a new Project
export const createProject = async (req, res) => {
  try {
    const { name, description, techs, image, link } = req.body;
    const newProject = await Project.create({
      name,
      description,
      techs, // if array is sent from frontend
      image,
      link,
    });
    res.status(201).json(newProject);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating project", error: err.message });
  }
};

// Get all Projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching projects", error: err.message });
  }
};

// Get a single Project by ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching project", error: err.message });
  }
};

// Update a Project by ID
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Project.update(req.body, { where: { id } });
    if (!updated)
      return res
        .status(404)
        .json({ message: "Project not found or nothing to update" });

    const updatedProject = await Project.findByPk(id);
    res.json(updatedProject);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating project", error: err.message });
  }
};

// Delete a Project by ID
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting project", error: err.message });
  }
};
