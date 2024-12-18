import { AnimalCategory } from "../models/animal.model.js";
import { Breed } from "../models/breed.model.js";
//create a new animal
export const addanimal = async (req, res) => {
  const { animal_type, breed_ids } = req.body;

  let animal = await AnimalCategory.findOne({ animal_type });
  if (animal) {
    return res.status(400).json({ error: "Animal already exists" });
  }

  if (breed_ids) {
    const validBreeds = await Promise.all(
      breed_ids.map(async (breedId) => {
        let breed = await Breed.findById(breedId);
        if (!breed) {
          breed = await Breed.createBreed({ breed_name: breedId });
        }
        return breed;
      })
    );
  }

  animal = await AnimalCategory.create({
    animal_type,
    breeds: breed_ids,
  });
  if (!animal) {
    return res.status(400).json({ error: "Something went wrong" });
  }
  res.send(animal);
};

//get all animals
export const getAllAnimals = async (req, res) => {
  try {
    const animals = await AnimalCategory.find().populate("breeds");
    res.status(200).json({ success: true, data: animals });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//get a single animal by id
export const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await AnimalCategory.findById(id).populate("breeds");
    if (!animal) {
      return res
        .status(404)
        .json({ success: false, message: "Animal is not found" });
    }
    res.status(200).json({ success: true, data: animal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//update an animal
export const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedAnimal = await UserAnimal.findByIdAndUpdate(id, updatedData, {
      new: true,
      // runValidators:true
    });
    if (!updateAnimal) {
      return res
        .status(404)
        .json({ success: false, message: "Animal not found" });
    }
    res.status(200).json({ success: true, data: updatedAnimal });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnimal = await UserAnimal.findByIdAndDelete(id);
    if (!deletedAnimal) {
      return res
        .status(404)
        .json({ success: false, message: "Animal not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Animal deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
