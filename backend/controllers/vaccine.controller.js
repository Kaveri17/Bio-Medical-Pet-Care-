
// ----------------------------------------------------------------------------------------------------------------------
import { UserAnimal } from "../models/userAnimal.model.js";
import { Vaccine } from "../models/vaccine.model.js";


const calculateCosineSimilarity = (vectorA, vectorB) => {
    const dotProduct = vectorA.reduce((sum, val, i) => sum + val * vectorB[i], 0);
    const magnitudeA = Math.sqrt(vectorA.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(vectorB.reduce((sum, val) => sum + val * val, 0));

    return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
};

export const recommendVaccines = async (req, res) => {
    try {
        const { userAnimalId } = req.params;

        // Fetch the user's animal profile
        const userAnimal = await UserAnimal.findById(userAnimalId)
            .populate("animal_type")
            .populate("breed");

        if (!userAnimal) {
            return res.status(404).json({ message: "User animal not found" });
        }

        const { age, animal_type, breed, acceptedVaccines, rejectedVaccines } = userAnimal;

        // Fetch vaccines matching the animal type
        const vaccines = await Vaccine.find({
            animal_type: animal_type._id,
            _id: { $nin: [...acceptedVaccines, ...rejectedVaccines] }, // Exclude accepted/rejected
        });

        // Normalize age (assuming max age is 20 for now)
        const normalizedUserAge = age / 20;  

        const vaccineScores = vaccines.map((vaccine) => {
            let ageMatch = 0, effectivenessScore = 0, breedMatch = 0;

            // Convert vaccine attributes into a vector
            vaccine.effectiveness.forEach((effect) => {
                if (age >= effect.minAge && age <= effect.maxAge) {
                    const normalizedVaccineAge = ((effect.minAge + effect.maxAge) / 2) / 20;
                    ageMatch = 1 - Math.abs(normalizedUserAge - normalizedVaccineAge);
                    effectivenessScore = effect.effectivenessPercentage / 100;
                }
            });

            // Check if the breed is supported
            if (vaccine.breeds.includes(breed._id)) {
                breedMatch = 1;
            }

            // Create vectors
            // const userVector = [normalizedUserAge, 1, breedMatch]; // User always has 100% effectiveness for itself
            // const vaccineVector = [ageMatch, effectivenessScore, breedMatch];

            // adding weightage 
            const ageWeight = 0.6;
            const effectivenessWeight = 0.3;
            const breedWeight = 0.1;
            
            const userVector = [
                normalizedUserAge * ageWeight,
                1 * effectivenessWeight, // User effectiveness is always 100%
                breedMatch * breedWeight
            ];
            
            const vaccineVector = [
                ageMatch * ageWeight,
                effectivenessScore * effectivenessWeight,
                breedMatch * breedWeight
            ];
            

            // Compute cosine similarity
            const similarity = calculateCosineSimilarity(userVector, vaccineVector);

            console.log(`Vaccine: ${vaccine.vaccine_name}`);
            console.log(`User Vector:`, userVector);
            console.log(`Vaccine Vector:`, vaccineVector);
            console.log(`Cosine Similarity:`, similarity);
        
            return { vaccine, similarity };
        });

        // Sort vaccines by highest similarity
        vaccineScores.sort((a, b) => b.similarity - a.similarity);

        res.status(200).json({ recommendedVaccines: vaccineScores.map((v) => v.vaccine) });
    } catch (error) {
        res.status(500).json({ message: "Error recommending vaccines", error: error.message });
    }
};


  export const acceptVaccine = async (req, res) => {
    try {
      const { userAnimalId, vaccineId } = req.body;
  
      // Update user animal record
      const updatedAnimal = await UserAnimal.findByIdAndUpdate(
        userAnimalId,
        {
          $addToSet: { acceptedVaccines: vaccineId }, // Prevent duplicates
          $pull: { rejectedVaccines: vaccineId, missedVaccines: vaccineId }, // Remove if previously rejected/missed
        },
        { new: true }
      );
  
      res.status(200).json({ message: "Vaccine accepted", animal: updatedAnimal });
    } catch (error) {
      res.status(500).json({ message: "Error accepting vaccine", error: error.message });
    }
  };
  
  export const rejectVaccine = async (req, res) => {
    try {
      const { userAnimalId, vaccineId } = req.body;
  
      // Update user animal record
      const updatedAnimal = await UserAnimal.findByIdAndUpdate(
        userAnimalId,
        {
          $addToSet: { rejectedVaccines: vaccineId }, // Prevent duplicates
          $pull: { acceptedVaccines: vaccineId, missedVaccines: vaccineId }, // Remove if previously accepted/missed
        },
        { new: true }
      );
  
      res.status(200).json({ message: "Vaccine rejected", animal: updatedAnimal });
    } catch (error) {
      res.status(500).json({ message: "Error rejecting vaccine", error: error.message });
    }
  };
  

  export const markMissedVaccine = async (userAnimalId, vaccineId) => {
    try {
      await UserAnimal.findByIdAndUpdate(userAnimalId, {
        $addToSet: { missedVaccines: vaccineId },
      });
    } catch (error) {
      console.error("Error marking vaccine as missed:", error);
    }
  };

//   ----------------------------------------------

  export const createVaccine = async (req, res) => {
    try {
      const { vaccine_name, animal_type, breeds, effectiveness } = req.body;
  
      if (!vaccine_name || !animal_type || !breeds || !effectiveness) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newVaccine = new Vaccine({
        vaccine_name,
        animal_type,
        breeds,
        effectiveness,
      });
  
      const savedVaccine = await newVaccine.save();
      res.status(201).json(savedVaccine);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  /**
   * @desc Get all vaccines
   * @route GET /api/vaccines
   */
  export const getAllVaccines = async (req, res) => {
    try {
      const vaccines = await Vaccine.find()
        .populate("animal_type", "animal_type") // Populate animal type
        .populate("breeds", "breed_name"); // Populate breed name
  
      res.status(200).json(vaccines);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  /**
   * @desc Get a single vaccine by ID
   * @route GET /api/vaccines/:id
   */
  export const getVaccineById = async (req, res) => {
    try {
      const vaccine = await Vaccine.findById(req.params.id)
        .populate("animal_type", "animal_type")
        .populate("breeds", "breed_name");
  
      if (!vaccine) {
        return res.status(404).json({ message: "Vaccine not found" });
      }
  
      res.status(200).json(vaccine);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  /**
   * @desc Update a vaccine
   * @route PUT /api/vaccines/:id
   */
  export const updateVaccine = async (req, res) => {
    try {
      const { name, animal_type, breeds, effectiveness } = req.body;
  
      const updatedVaccine = await Vaccine.findByIdAndUpdate(
        req.params.id,
        { name, animal_type, breeds, effectiveness },
        { new: true, runValidators: true }
      );
  
      if (!updatedVaccine) {
        return res.status(404).json({ message: "Vaccine not found" });
      }
  
      res.status(200).json(updatedVaccine);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  /**
   * @desc Delete a vaccine
   * @route DELETE /api/vaccines/:id
   */
  export const deleteVaccine = async (req, res) => {
    try {
      const deletedVaccine = await Vaccine.findByIdAndDelete(req.params.id);
  
      if (!deletedVaccine) {
        return res.status(404).json({ message: "Vaccine not found" });
      }
  
      res.status(200).json({ message: "Vaccine deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };