import { AnimalCategory } from "../models/animal.model.js";
import { Breed } from "../models/breed.model.js";

// Create a new animal
export const addAnimal = async (req, res) => {
  const { animal_type } = req.body;

  try {
    // Check if the animal already exists (case insensitive)
    let existingAnimal = await AnimalCategory.findOne({
      animal_type: { $regex: new RegExp(`^${animal_type}$`, "i") },
    });

    if (existingAnimal) {
      return res
        .status(400)
        .json({ success: false, message: "Animal already exists" });
    }

    const newAnimal = new AnimalCategory({ animal_type });
    await newAnimal.save();

    res.status(201).json({ success: true, data: newAnimal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all animals
export const getAllAnimals = async (req, res) => {
  try {
    const animals = await AnimalCategory.find().populate("breeds");
    // const category = await AnimalCategory.find().populate("breeds", "breed_name");
    res.status(200).json({ success: true, data: animals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a single animal by id
export const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await AnimalCategory.findById(id).populate("breeds");

    if (!animal) {
      return res.status(404).json({ success: false, message: "Animal not found" });
    }

    res.status(200).json({ success: true, data: animal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an animal
// export const updateAnimal = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { animal_type, breed_ids } = req.body;

//     // Validate input
//     if (!animal_type || !breed_ids) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     // Find and update the animal
//     const updatedAnimal = await AnimalCategory.findByIdAndUpdate(
//       id,
//       { animal_type, breeds: breed_ids },
//       { new: true }
//     );

//     if (!updatedAnimal) {
//       return res.status(404).json({ error: "Animal not found." });
//     }

//     res.status(200).json(updatedAnimal);
//   } catch (err) {
//     console.error("Error updating animal:", err);
//     res.status(500).json({ error: "Internal server error." });
//   }
// };

export const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const { animal_type, breeds } = req.body;

    if (!animal_type || !breeds || breeds.length === 0) {
      return res
        .status(400)
        .json({ error: "Animal type and breeds are required." });
    }
    const breedIds = []; // This will store the breed _ids
     // Iterate through each breed in the breeds array
    for (const { breed_name } of breeds) {
      // Find if the breed already exists for the given animal_type
      let existingBreed = await Breed.findOne({ breed_name, animal_type:id });

      if (!existingBreed) {
        const newBreed = new Breed({ breed_name, animal_type:id });
        await newBreed.save();
        breedIds.push(newBreed._id);
      } else {
        breedIds.push(existingBreed._id);
      }
    }

    // Update the animal category with the new breeds
    const updatedAnimal = await AnimalCategory.findByIdAndUpdate(
      id,
      { animal_type, breeds: breedIds },
      { new: true }
    );

    if (!updatedAnimal) {
      return res.status(404).json({ error: "Animal not found." });
    }

    res.status(200).json({ success: true, data: updatedAnimal });
  } catch (err) {
    console.error("Error updating animal:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Delete an animal
export const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnimal = await AnimalCategory.findByIdAndDelete(id);

    if (!deletedAnimal) {
      return res
        .status(404)
        .json({ success: false, message: "Animal not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Animal deleted successfully" });
  } catch (error) {
    console.error("Error deleting animal:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// Fetch available breeds for each animal type
export const getAnimalBreeds = async (req, res) => {
  try {
    const animals = await AnimalCategory.find().populate(
      "breeds",
      "breed_name"
    ); // Populate breeds for each animal

    // Format the response
    const breedOptions = animals.reduce((acc, animal) => {
      acc[animal.animal_type.toLowerCase()] = animal.breeds.map((breed) => ({
        label: breed.breed_name,
        value: breed.breed_name.toLowerCase(),
      }));
      return acc;
    }, {});

    res.status(200).json({ breedOptions });
  } catch (error) {
    console.error("Error fetching breeds:", error);
    res.status(500).json({ error: "Failed to fetch animal breeds" });
  }
};