const mongoose = require("mongoose");

const impactSchema = new mongoose.Schema(
    {
        totalMealsProvided: {
            type: Number,
            required: true,
            default: 0,
        },
        childrenEducated: {
            type: Number,
            required: true,
            default: 0,
        },
        schoolsBuiltOrRenovated: {
            type: Number,
            required: true,
            default: 0,
        },
        volunteersEngaged: {
            type: Number,
            required: true,
            default: 0,
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields automatically
    }
);

const Impact = mongoose.model("Impact", impactSchema);

module.exports = Impact;
