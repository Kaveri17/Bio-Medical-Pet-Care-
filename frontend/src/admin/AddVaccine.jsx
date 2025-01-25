import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllAnimals } from "../api/Animals";
import { addVaccine } from "../api/Vaccine";
// import { addVaccine } from "../api/Vaccine"; // API function for adding vaccine
// import { getAllAnimals } from "../api/Animal"; // API function for fetching animals

const AddVaccine = () => {
  const navigate = useNavigate();

  // State for animal types and breeds
  const [animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [formData, setFormData] = useState({
    vaccineName: "",
    animalType: "",
    breed: "",
    frequency: "",
    duration: "",
    ageRangeMin: "",
    ageRangeMax: "",
  });

  // Fetch animal types and their breeds on component mount
  useEffect(() => {
    const getAnimals = async () => {
      try {
        const response = await getAllAnimals(); // API call to get animals
        setAnimals(response.data.data); // Set the animals with breeds
      } catch (error) {
        console.error("Error fetching animals:", error);
      }
    };

    getAnimals();
  }, []);

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // When animal type is selected, filter breeds for that animal
    if (name === "animalType") {
      const selectedAnimal = animals.find((animal) => animal._id === value);
      setBreeds(selectedAnimal?.breeds || []); // Update breeds based on selected animal type
      setFormData((prev) => ({
        ...prev,
        breed: "", // Reset breed when animal type changes
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      vaccineName,
      animalType,
      breed,
      frequency,
      duration,
      ageRangeMin,
      ageRangeMax,
    } = formData;

    if (
      !vaccineName ||
      !animalType ||
      !breed ||
      !frequency ||
      !duration ||
      !ageRangeMin ||
      !ageRangeMax
    ) {
      alert("Please fill in all fields");
      return;
    }

    const vaccineData = {
      vaccine_name: vaccineName,
      animal_type: animalType, // Send animal type ID
      breed, // Send breed ID
      frequency,
      duration: parseInt(duration, 10),
      age_range: {
        min: parseInt(ageRangeMin, 10),
        max: parseInt(ageRangeMax, 10),
      },
    };

    try {
      await addVaccine(vaccineData);
      alert("Vaccine added successfully!");
      navigate("/admin/add-vaccine");
    } catch (error) {
      console.error("Error adding vaccine:", error);
      alert("Failed to add vaccine. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Add Vaccine
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="vaccineName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Vaccine Name
            </label>
            <input
              type="text"
              id="vaccineName"
              name="vaccineName"
              value={formData.vaccineName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter vaccine name"
            />
          </div>

          <div>
            <label
              htmlFor="animalType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Animal Type
            </label>
            <select
              id="animalType"
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Animal Type</option>
              {animals.map((animal) => (
                <option key={animal._id} value={animal._id}>
                  {animal.animal_type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Breeds
            </label>
            <select
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Breed</option>
              {breeds.map((breed) => (
                <option key={breed._id} value={breed._id}>
                  {breed.breed_name}
                </option>
              ))}
            </select>
          </div>

          {/* Remaining fields */}
          {/* Frequency, Duration, Age Range, etc. */}
          {/* Same as original code */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Add Vaccine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVaccine;