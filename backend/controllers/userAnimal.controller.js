import { UserAnimal } from "../models/userAnimal.model.js";
import { User } from "../models/user.model.js";
import { AnimalCategory } from "../models/animal.model.js";

export const addUsersAnimal = async (req, res) => {
  const { animal_type, breed, age, gender } = req.body;
  const userId = req.userId;
  try {
    const animalCategory = await AnimalCategory.findById(
      animal_type
    ).populate("breeds");
    if (!animalCategory) {
      return res.status(400).json({ error: "Invalid animal type" });
    }

    // Check if the breed exists within the selected animal type
    const breedExists = animalCategory.breeds.some(
        (breedItem) => breedItem._id.toString() === breed.toString()
    );
    if (!breedExists) {
      return res
        .status(400)
        .json({ error: "Invalid breed for this animal type" });
    }
    const newUserAnimal = await UserAnimal.create({
      user: userId, // verifyToken
      animal_type: animalCategory._id,
      breed,
      age,
      gender,
    });
    
    res.status(201).json(newUserAnimal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding user animal" });
  }
};
