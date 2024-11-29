import { Vaccine } from "../models/vaccine.model.js";
import { sendAlertNotification } from "../utils/notification.js"; // A helper function to send notifications

// Add a new vaccine
export const addVaccine = async (req, res) => {
  try {
    const { vaccine_name, animal_type, breed, frequency, duration, age } = req.body;

    const vaccine = new Vaccine({
      vaccine_name,
      animal_type,
      breed,
      frequency,
      duration,
      age,
    });

    await vaccine.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "Vaccine added successfully",
      vaccine,
    });
  } catch (error) {
    console.error("Error adding vaccine:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get all vaccines
export const getVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find()
      .populate("animal_type", "type_name") // Assuming `type_name` is a field in the Breed model
      .populate("breed", "breed_name"); // Assuming `breed_name` is a field in the Breed model

    return res.status(200).json({ success: true, vaccines });
  } catch (error) {
    console.error("Error fetching vaccines:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


export const sendVaccineAlerts = async (req, res) => {
  try {
   

    const currentDate = Date.now();

    const vaccinesToNotify = upcomingVaccines.filter((vaccine) => {
      const vaccineDueDate = new Date(vaccine.createdAt).getTime() + vaccine.age * 24 * 60 * 60 * 1000;
      return vaccineDueDate - currentDate <= 3 * 24 * 60 * 60 * 1000; 
    });

    // Send notifications for each vaccine
    vaccinesToNotify.forEach((vaccine) => {
      sendAlertNotification({
        message: `Reminder: The ${vaccine.vaccine_name} vaccine for ${vaccine.breed} is due in 3 days.`,
        email: "user@example.com", 
      });
    });

    return res.status(200).json({
      success: true,
      message: "Notifications sent for upcoming vaccines",
    });
  } catch (error) {
    console.error("Error sending vaccine alerts:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
