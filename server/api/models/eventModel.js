const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Event title is required"],
            trim: true,
        },
        description: {
            type: String,
            required: [true, "Event description is required"],
        },
        date: {
            type: Date,
            required: [true, "Event date is required"],
        },
        location: {
            type: String,
            required: [true, "Event location is required"],
        },
        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        status: {
            type: String,
            enum: ["upcoming", "ongoing", "completed"],
            default: "upcoming",
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
