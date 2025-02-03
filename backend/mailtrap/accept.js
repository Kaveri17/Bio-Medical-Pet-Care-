import { 
    VACCINE_ACCEPTANCE_TEMPLATE, 
    VACCINE_REJECTION_TEMPLATE 
} from "./emailTemplates.js";
import { transporter, sender } from "./mailtrap.config.js";

export const sendVaccineAcceptanceEmail = async (email, animalName, vaccineName) => {
    try {
        const response = await transporter.sendMail({
            from: sender,
            to: email,
            subject: `Vaccine Acceptance for ${animalName}`,
            html: VACCINE_ACCEPTANCE_TEMPLATE
                .replace("{animalType}", animalName)
                .replace("{vaccineName}", vaccineName),
            category: "Vaccine Acceptance",
        });
        console.log("Vaccine acceptance email sent successfully", response);
    } catch (error) {
        console.error("Error sending vaccine acceptance email", error);
        throw new Error(`Error sending vaccine acceptance email: ${error}`);
    }
};
export const sendVaccineRejectionEmail = async (email, animalName, vaccineName) => {
    try {
        const response = await transporter.sendMail({
            from: sender,
            to: email,
            subject: `Vaccine Rejection for ${animalName}`,
            html: VACCINE_REJECTION_TEMPLATE
                .replace("{animalType}", animalName)
                .replace("{vaccineName}", vaccineName),
            category: "Vaccine Rejection",
        });
        console.log("Vaccine rejection email sent successfully", response);
    } catch (error) {
        console.error("Error sending vaccine rejection email", error);
        throw new Error(`Error sending vaccine rejection email: ${error}`);
    }
};
