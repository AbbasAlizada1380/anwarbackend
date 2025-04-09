import { Message } from "../models/index.js";
import nodemailer from "nodemailer";

// replace with your admin email credentials
const adminEmail = "admin@example.com";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-admin@gmail.com", // replace
    pass: "your-app-password", // replace (use app password if 2FA is on)
  },
});

// CREATE and SEND email
export const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newMessage = await Message.create({ name, email, message });

    // Send email to admin
    const mailOptions = {
      from: email,
      to: adminEmail,
      subject: `📨 New Message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("❌ Failed to send email:", err);
      } else {
        console.log("📧 Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "Message received and email sent." });
  } catch (err) {
    console.error("Error creating message:", err);
    res.status(500).json({ message: "Server error." });
  }
};

// GET: Get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ message: "Server error." });
  }
};

// GET: Get message by ID
export const getMessageById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findByPk(id);

    if (!message) {
      return res.status(404).json({ message: "Message not found." });
    }

    res.status(200).json(message);
  } catch (err) {
    console.error("Error fetching message by ID:", err);
    res.status(500).json({ message: "Server error." });
  }
};
