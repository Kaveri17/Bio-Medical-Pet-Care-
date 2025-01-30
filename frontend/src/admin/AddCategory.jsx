import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../layout/AdminSidebar"; // Import your Sidebar component
import Select from "react-select"; // Import react-select

const API = "http://localhost:5001/api";

const AdminAnimal = () => {
  const [showModal, setShowModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    animal_type: "",
    breeds: [],
  });
  const [editAnimal, setEditAnimal] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const breedOptions = {
    cow: [
      { label: "Jersey", value: "jersey" },
      { label: "Holstein", value: "holstein" },
      { label: "Sahiwal", value: "sahiwal" },
    ],
    dog: [
      { label: "Labrador", value: "labrador" },
      { label: "Beagle", value: "beagle" },
      { label: "German Shepherd", value: "german_shepherd" },
    ],
    hen: [
      { label: "Rhode Island Red", value: "rhode_island_red" },
      { label: "Leghorn", value: "leghorn" },
      { label: "Plymouth Rock", value: "plymouth_rock" },
    ],
  };

  // Fetch animals from the backend
  useEffect(() => {
    axios
      .get(`${API}/animal/getallanimal`)
      .then((response) => {
        setAnimals(response.data.data); // Populate animals from backend
      })
      .catch((error) => {
        console.error("Error fetching animals:", error);
      });
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    setEditAnimal(null);
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBreedChange = (selectedOptions) => {
    setNewAnimal((prevState) => ({
      ...prevState,
      breeds: selectedOptions || [],
    }));
  };

  const isValidAnimalType = (type) => {
    return Object.keys(breedOptions).includes(type.toLowerCase());
  };

  const handleAddAnimal = () => {
    if (!newAnimal.animal_type || !newAnimal.breeds.length) {
      setError("All fields are required.");
      return;
    }

    if (!isValidAnimalType(newAnimal.animal_type)) {
      setError("Please select a valid animal type.");
      return;
    }

    const animalData = {
      animal_type: newAnimal.animal_type,
      breeds: newAnimal.breeds.map((breed) => ({ breed_name: breed.label })),
      _id: Date.now(), // Temporary unique ID
    };

    setAnimals((prevAnimals) => [...prevAnimals, animalData]);
    setShowModal(false);
    setNewAnimal({ animal_type: "", breeds: [] });
    setError("");
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-4 ml-[250px]">
        <h2 className="text-2xl font-semibold mb-4">Animals</h2>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
        >
          Add Animal
        </button>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Animal Type</th>
                <th className="border border-gray-300 px-4 py-2">Breeds</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal, index) => (
                <tr key={animal._id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{animal.animal_type}</td>
                  <td className="px-4 py-2">
                    {animal.breeds.map((breed) => breed.breed_name).join(", ")}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(animal)}
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
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">
                {editAnimal ? "Edit Animal" : "Add New Animal"}
              </h3>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  editAnimal ? handleUpdateAnimal() : handleAddAnimal();
                }}
              >
                <div className="mb-4">
                  <label
                    htmlFor="animal_type"
                    className="block text-gray-700 mb-2"
                  >
                    Animal Type
                  </label>
                  <select
                    id="animal_type"
                    name="animal_type"
                    value={newAnimal.animal_type}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    required
                  >
                    <option value="" disabled>
                      Select an animal type
                    </option>
                    {Object.keys(breedOptions).map((type) => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="breeds" className="block text-gray-700 mb-2">
                    Breeds
                  </label>
                  <Select
                    isMulti
                    id="breeds"
                    options={breedOptions[newAnimal.animal_type] || []}
                    value={newAnimal.breeds}
                    onChange={handleBreedChange}
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    {editAnimal ? "Update Animal" : "Add Animal"}
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