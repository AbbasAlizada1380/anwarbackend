// controllers/aboutPage.controller.js
import { sequelize, AboutPage } from "../models/index.js"; // Named imports

// Create a new AboutPage
export const createAboutPage = async (req, res) => {
  try {
    const { text, smallImage, largeImage, resume } = req.body;
    const newPage = await AboutPage.create({
      text,
      smallImage,
      largeImage,
      resume,
    });
    res.status(201).json(newPage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating AboutPage", error: err.message });
  }
};

// Get all AboutPage entries
export const getAllAboutPages = async (req, res) => {
  try {
    console.log("AboutPage model:", AboutPage); // Check if it's defined
    const aboutPages = await AboutPage.findAll();
    res.status(200).json(aboutPages);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error fetching AboutPages", error: err.message });
  }
};

// Get a single AboutPage by ID
export const getAboutPageById = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await AboutPage.findByPk(id);
    if (!page) return res.status(404).json({ message: "AboutPage not found" });
    res.json(page);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching AboutPage", error: err.message });
  }
};

// Update an AboutPage by ID
export const updateAboutPage = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await AboutPage.update(req.body, { where: { id } });
    if (!updated)
      return res
        .status(404)
        .json({ message: "AboutPage not found or nothing to update" });

    const updatedPage = await AboutPage.findByPk(id);
    res.json(updatedPage);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating AboutPage", error: err.message });
  }
};

// Delete an AboutPage by ID
export const deleteAboutPage = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await AboutPage.destroy({ where: { id } });
    if (!deleted)
      return res.status(404).json({ message: "AboutPage not found" });

    res.json({ message: "AboutPage deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting AboutPage", error: err.message });
  }
};
