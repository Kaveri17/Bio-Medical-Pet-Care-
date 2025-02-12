import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../layout/AdminSidebar";

const API = "http://localhost:5000/api";

const AdminAnimal = () => {
  const [showAddAnimalModal, setShowAddAnimalModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [newAnimalType, setNewAnimalType] = useState("");
  const [newBreeds, setNewBreeds] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch all animals
  const fetchAnimals = async () => {
    try {
      const response = await axios.get(`${API}/animal/getallanimal`);
      setAnimals(response.data.data);
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  // Function to add an animal type along with breeds
  const handleAddAnimal = async () => {
    // Validate Animal Type (Only letters and spaces, max length of 20)
    const animalTypeRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    if (!newAnimalType) {
      setError("Animal type is required.");
      return;
    }
    if (!animalTypeRegex.test(newAnimalType)) {
      setError("Animal type must only contain letters and spaces.");
      return;
    }
    if (newAnimalType.length > 20) {
      setError("Animal type name should not exceed 20 characters.");
      return;
    }

    // Validate Breeds (Only letters and spaces, separated by commas)
    if (!newBreeds) {
      setError("Breed(s) are required.");
      return;
    }

    const breedList = newBreeds.split(",").map((breed) => breed.trim());
    // Check if breedList is empty after trimming
    if (breedList.length === 0) {
      setError("At least one valid breed is required.");
      return;
    }
     // Validate each breed (must contain only letters and spaces, and be at least 3 characters long)
  const breedRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    // Validate each breed (optional: check for duplicates or invalid names)
    const invalidBreeds = breedList.filter(
      (breed) => breed === "" || breed.length < 3 || !breedRegex.test(breed)
    ); // Example: breed should be at least 3 characters long
    if (invalidBreeds.length > 0) {
      setError("Please enter valid breed names(only letters and at least 3 characters).");
      return;
    }
    try {
      const response = await axios.post(`${API}/animal/addanimal`, {
        animal_type: newAnimalType,
      });

      if (response.data.success) {
        const animalTypeId = response.data.data._id;
        console.log("animalTypeId", animalTypeId);
        for (let breed of breedList) {
          console.log("Breed of breedlist", breed);
          await axios.post(`${API}/breed/addbreed`, {
            breed_name: breed,
            animal_type: animalTypeId,
          });
        }

        fetchAnimals();
        setShowAddAnimalModal(false);
        setNewAnimalType("");
        setNewBreeds("");
        setError("");
      } else {
        setError(response.data.message || "Failed to add animal type.");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.error(
        "Error adding animal type because",
        error.response.data.message
      );
    }
  };

  // Function to delete an animal type
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this animal type?")) {
      try {
        const response = await axios.delete(`${API}/animal/delete/${id}`);
        if (response.data.success) {
          setAnimals(animals.filter((animal) => animal._id !== id));
        } else {
          alert("Failed to delete animal type.");
        }
      } catch (error) {
        console.error("Error deleting animal type:", error);
        alert("An error occurred while deleting the animal type.");
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-4 ml-[250px]">
        <h2 className="text-2xl font-semibold mb-4">Animals</h2>

        <button
          onClick={() => setShowAddAnimalModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4"
        >
          Add Animal Type
        </button>

        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Animal Type</th>
              <th className="border px-4 py-2">Breeds</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal, index) => (
              <tr key={animal._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{animal.animal_type}</td>
                <td className="px-4 py-2">
                  {animal.breeds &&
                    animal.breeds.map((breed) => breed.breed_name).join(", ")}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      navigate(`/admin/update-category/${animal._id}`)
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(animal._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for Adding Animal Type */}
        {showAddAnimalModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">
                Add New Animal Type
              </h3>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddAnimal();
                }}
              >
                <label className="block mb-2">Animal Type Name</label>
                <input
                  type="text"
                  value={newAnimalType}
                  onChange={(e) => setNewAnimalType(e.target.value)}
                  placeholder="Enter animal type"
                  className="w-full border rounded-lg px-4 py-2 mb-4"
                  required
                />
                <label className="block mb-2">Breed(s)</label>
                <input
                  type="text"
                  value={newBreeds}
                  onChange={(e) => setNewBreeds(e.target.value)}
                  placeholder="Enter breed names (comma separated)"
                  className="w-full border rounded-lg px-4 py-2 mb-4"
                  required
                />
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddAnimalModal(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Add Animal Type
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAnimal;
