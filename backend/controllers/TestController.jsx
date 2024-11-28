const Animal = require('../models/animal');

// Get all animals
exports.getAllAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching animals', error });
  }
};

// Create a new animal
exports.createAnimal = async (req, res) => {
  const { name, type, breed, age } = req.body;
  
  const newAnimal = new Animal({
    name,
    type,
    breed,
    age,
  });

  try {
    const savedAnimal = await newAnimal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    res.status(500).json({ message: 'Error creating animal', error });
  }
};

// Get a specific animal by ID
exports.getAnimalById = async (req, res) => {
  const { animalId } = req.params;

  try {
    const animal = await Animal.findById(animalId);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching animal', error });
  }
};