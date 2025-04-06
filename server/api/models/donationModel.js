import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
    {
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            enum: ["USD", "EUR", "GBP"],
            required: true,
            default: "USD",
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        transactionId: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending",
        },
    },
    { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
export default Donation;
