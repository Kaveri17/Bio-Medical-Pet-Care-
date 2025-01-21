import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [animalType, setAnimalType] = useState("");
  const [breeds, setBreeds] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, animalType: "Dog", breeds: "Golden Retriever, Labrador" },
    { id: 2, animalType: "Cow", breeds: "Jersey, Holstein" },
  ]);

  useEffect(() => {
    const category = categories.find((category) => category.id === parseInt(id));
    if (category) {
      setAnimalType(category.animalType);
      setBreeds(category.breeds);
    }
  }, [id, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCategory = { id: parseInt(id), animalType, breeds };
    setCategories(categories.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)));
    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Update Category</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="animal_type" className="block text-sm font-medium text-gray-700 mb-2">
            Animal Type
          </label>
          <input
            id="animal_type"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="breeds" className="block text-sm font-medium text-gray-700 mb-2">
            Breed
          </label>
          <input
            id="breeds"
            value={breeds}
            onChange={(e) => setBreeds(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateCategory;
