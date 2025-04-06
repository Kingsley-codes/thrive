const mongoose = require("mongoose");

const childSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        age: {
            type: Number,
            required: true,
            min: 0,
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        needs: {
            type: [String],
            required: true,
        },
        sponsored: {
            type: Boolean,
            default: false,
        },
        sponsorshipDetails: {
            sponsorId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                default: null,
            },
            amount: {
                type: Number,
                default: 0,
            },
            currency: {
                type: String,
                enum: ["USD", "EUR", "GBP"],
                default: "USD",
            },
        },
    },
    { timestamps: true }
);

const Child = mongoose.model("Child", childSchema);
module.exports = Child;
