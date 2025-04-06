const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [/.+@.+\..+/, "Please enter a valid email address"],
        },
        subject: {
            type: String,
            required: [true, "Subject is required"],
            trim: true,
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
            minlength: [10, "Message must be at least 10 characters long"],
        },
        status: {
            type: String,
            enum: ["pending", "reviewed", "resolved"],
            default: "pending",
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps
    }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
