import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  const [categories, setCategories] = useState([
    { id: 1, animalType: "Dog", breeds: "Golden Retriever, Labrador" },
    { id: 2, animalType: "Cow", breeds: "Jersey, Holstein" },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">Animal Categories</h2>
      <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <th className="px-6 py-4">Animal Type</th>
              <th className="px-6 py-4">Breeds</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-t hover:bg-gray-100 transition-all"
              >
                <td className="px-6 py-4 text-gray-800">{category.animalType}</td>
                <td className="px-6 py-4 text-gray-800">{category.breeds}</td>
                <td className="px-6 py-4 text-center space-x-4">
                  <Link
                    to="/admin/update-category"
                    className="bg-yellow-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-red-600 hover:scale-105 transition-all"
                    onClick={() => {
                      const updatedCategories = categories.filter(
                        (cat) => cat.id !== category.id
                      );
                      setCategories(updatedCategories);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCategory;
