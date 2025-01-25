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
    setCategories(
      categories.map((category) =>
        category.id === updatedCategory.id ? updatedCategory : category
      )
    );
    navigate("/");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Update Category
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="animal_type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Animal Type
            </label>
            <input
              id="animal_type"
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter animal type"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Breed
            </label>
            <textarea
              id="breed"
              value={breeds}
              onChange={(e) => setBreeds(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter breed"
              rows="3"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
