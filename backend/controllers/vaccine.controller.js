import vaccineData from '../data/vaccine_data.js';

// Fetch all vaccines
export const getAllVaccines = (req, res) => {
    res.json(vaccineData);
};

// Fetch vaccine by ID
export const getVaccineById = (req, res) => {
    const vaccine = vaccineData.find(v => v.id === parseInt(req.params.id));
    if (!vaccine) {
        return res.status(404).send('Vaccine not found');
    }
    res.json(vaccine);
};

// Fetch vaccine by Name
export const getVaccineByName = (req, res) => {
    // Capture the vaccine name from the URL, spaces and all.
    const vaccineName = req.params.name.replace(/%20/g, ' ').toLowerCase();  // Replace any encoded %20 back to spaces and normalize

    const vaccine = vaccineData.find(v => v.vaccine_name.toLowerCase() === vaccineName);

    if (!vaccine) {
        return res.status(404).send('Vaccine not found');
    }

    res.json(vaccine);
};
const yearsToMonths = (years) => years * 12;

// Function to calculate the next vaccination date based on the age and animal type
export function recommendVaccines(req, res) {
    const { animal_type, age } = req.query;

    // Validate input parameters
    if (!animal_type || !age) {
        return res.status(400).json({ error: 'Missing required parameters (animal_type, age)' });
    }

    const animalAgeInMonths = yearsToMonths(parseInt(age));

    // Filter vaccines based on the animal's age and type
    const applicableVaccines = vaccineData.filter(vaccine => {
        const minAgeInMonths = yearsToMonths(vaccine.age_range.min);
        const maxAgeInMonths = yearsToMonths(vaccine.age_range.max);
        return vaccine.animal_type.toLowerCase() === animal_type.toLowerCase() && animalAgeInMonths >= minAgeInMonths && animalAgeInMonths <= maxAgeInMonths;
    });

    // If no vaccines are found for this age and animal type
    if (applicableVaccines.length === 0) {
        return res.status(404).json({ error: 'No vaccines found for this animal type and age' });
    }

    // Calculate the next vaccination date for each vaccine
    const vaccinesWithNextDate = applicableVaccines.map(vaccine => {
        const nextVaccinationDate = calculateNextVaccinationDate(vaccine, age);
        return {
            vaccine_name: vaccine.vaccine_name,
            next_vaccination_date: nextVaccinationDate
        };
    });

    return res.json(vaccinesWithNextDate);
}

// Function to calculate the next vaccination date based on the vaccine's frequency and duration
function calculateNextVaccinationDate(vaccine, age) {
    const frequency = vaccine.frequency.toLowerCase(); // Handle case insensitivity
    const durationParts = vaccine.duration.split(' '); // Split duration into value and unit
    const durationValue = parseFloat(durationParts[0]); // Extract the numeric value
    const durationUnit = durationParts[1].toLowerCase();

    const currentDate = new Date();

    // Calculate DOB using animal age
    const dob = new Date();
    dob.setFullYear(currentDate.getFullYear() - Math.floor(age));
    dob.setMonth(dob.getMonth() - Math.round((age % 1) * 12));

    console.log("Date of Birth:", dob);

    let nextVaccinationDate = new Date(dob)

    console.log("Current Date:", currentDate);
    if (durationUnit.includes('year')) {
        nextVaccinationDate.setFullYear(nextVaccinationDate.getFullYear() + Math.floor(durationValue));
        console.log("After Adding Full Years:", nextVaccinationDate);
    } else if (durationUnit.includes('months')) {
        nextVaccinationDate.setMonth(nextVaccinationDate.getMonth() + durationValue);
        console.log(`After Adding Months (${durationValue}):`, nextVaccinationDate);
    }

    // if (frequency === "every") {
    //     // Assuming recurring frequency adds the same duration repeatedly
    //     if (durationUnit.includes('year')) {
    //         nextVaccinationDate.setFullYear(currentDate.getFullYear() + + Math.floor(durationValue));
    //     } else if (durationUnit.includes('months')) {
    //         nextVaccinationDate.setMonth(currentDate.getMonth() + durationValue);
    //     }
    // }

    // if (frequency === "every") {
    //     const currentYear = currentDate.getFullYear();
    //     while (nextVaccinationDate <= currentDate) {
    //         if (durationUnit.includes('year')) {
    //             nextVaccinationDate.setFullYear(nextVaccinationDate.getFullYear() + Math.floor(durationValue));
    //         } else if (durationUnit.includes('month')) {
    //             nextVaccinationDate.setMonth(nextVaccinationDate.getMonth() + durationValue);
    //         }
    //     }
    // }

    //   // Handle recurring frequency if specified
    //   if (frequency.includes("every")) {
    //     while (nextVaccinationDate <= currentDate) {
    //         if (durationUnit.includes('year')) {
    //             nextVaccinationDate.setFullYear(nextVaccinationDate.getFullYear() + Math.floor(durationValue));
    //         } else if (durationUnit.includes('month')) {
    //             nextVaccinationDate.setMonth(nextVaccinationDate.getMonth() + Math.floor(durationValue));
    //         }
    //     }
    // }

    return nextVaccinationDate.toISOString().split('T')[0]; // Return the next vaccination date in YYYY-MM-DD format
}
