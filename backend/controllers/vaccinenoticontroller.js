// models/vaccineEmail.js

import VaccineEmail from "../models/vaccinemail.model.js";

// Replace with your actual model

// Get a single vaccine email by ID
export const getVaccineEmailById = async (id) => {
  try {
      // Your database query logic to fetch the vaccine email by ID
      const vaccineEmail = await VaccineEmailModel.findById(id); // Assuming you're using Mongoose or similar
      if (!vaccineEmail) {
          throw new Error("Vaccine email not found");
      }
      return vaccineEmail;
  } catch (error) {
      throw new Error("Error fetching vaccine email by ID: " + error.message);
  }
};


// Get all vaccine emails
// Import the correct model

export const getAllVaccineEmails = async () => {
    try {
        const vaccineEmails = await VaccineEmail.find();  // MongoDB query to find all records
        return vaccineEmails;
    } catch (error) {
        console.error("Error fetching all vaccine emails:", error); // Log the error for debugging
        throw new Error("Error fetching all vaccine emails: " + error.message); // Include the original error message
    }
};

