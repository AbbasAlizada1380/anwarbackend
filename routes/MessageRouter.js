import express from "express";
import {
  createMessage,
  getMessages,
  getMessageById,
} from "../controllers/message.controller.js";

const router = express.Router();
// Route to create a new message
router.post("/", createMessage);
// Route to get all messages
router.get("/", getMessages);
// Route to get a message by ID
router.get("/:id", getMessageById);

export default router;
