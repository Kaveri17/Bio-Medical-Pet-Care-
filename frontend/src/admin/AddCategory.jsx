import React, { useState, useEffect } from "react";
import axios from "axios";


const API = "http://localhost:5001/api";


const AdminCategory = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({
    animal_type: "",
    breed_name: "", 
  });


  useEffect(() => {
    axios
      .get(`${API}/animal/getallanimal`)
      .then((response) => {
        setCategories(response.data.data); 
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);


  const handleModalClose = () => {
    setShowModal(false);
    setNewCategory({ animal_type: "", breed_name: "" }); 
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!newCategory.animal_type || !newCategory.breed_name) {
      alert("Please fill out all fields");
      return;
    }

  
    const data = {
      animal_type: newCategory.animal_type,
      breed_name: newCategory.breed_name.trim(), 
    };

    try {
      // Send POST request to create new animal category with breed
      const response = await axios.post(`${API}/animals/addanimal`, data);
      console.log("Animal added successfully:", response.data);

      // Update categories list
      setCategories((prevCategories) => [...prevCategories, response.data.data]);

      // Close modal
      handleModalClose();
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Animal Categories</h2>

      {/* Add Category Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
      >
        Add Category
      </button>

      {/* Animal Categories Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Animal Type</th>
              <th className="border border-gray-300 px-4 py-2">Breed</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{category.animal_type}</td>
                <td className="px-4 py-2">{category.breeds.map((breed) => breed.breed_name).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Category</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="animal_type" className="block text-gray-700 mb-2">
                  Animal Type
                </label>
                <input
                  type="text"
                  id="animal_type"
                  name="animal_type"
                  value={newCategory.animal_type}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="breed_name" className="block text-gray-700 mb-2">
                  Breed Name
                </label>
                <input
                  type="text"
                  id="breed_name"
                  name="breed_name"
                  value={newCategory.breed_name} 
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategory;
