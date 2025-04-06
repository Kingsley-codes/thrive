import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/.+@.+\..+/, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"],
            select: false, // Don't return password by default
        },
        location: {
            type: String,
        },
        phone: {
            type: String,
            match: [/^\d{10}$/, "Please enter a valid phone number"],
        },
        role: {
            type: String,
            enum: ["volunteer", "staff", "admin"],
            default: "volunteer",
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

export default User;
