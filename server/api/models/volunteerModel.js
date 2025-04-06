import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        availability: {
            type: String,
            enum: ["full-time", "part-time (weekdays)", "part-time (weekends)", "part-time (flexible)"],
            required: true,
        },
        skills: {
            type: [String],
            default: [],
        },
        assignedProjects: {
            type: [String],
            default: [],
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
