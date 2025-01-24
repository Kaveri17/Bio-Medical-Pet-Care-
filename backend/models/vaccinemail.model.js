// models/VaccineEmail.js

import mongoose from "mongoose";

const vaccineEmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    animalName: {
        type: String,
        required: true,
    },
    vaccineName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,  // e.g., reminder, confirmation, follow-up
    },
}, { timestamps: true });

const VaccineEmail = mongoose.model("VaccineEmail", vaccineEmailSchema);

export default VaccineEmail;
