import React, { useState } from 'react';

const AdminCategory = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = [
    { animal_type: 'Dog', breeds: ['Golden Retriever', 'German Shepherd'] },
    { animal_type: 'Cow', breeds: ['Jersey', 'Terai Cattle'] },
    { animal_type: 'Hen', breeds: ['Rhode Island Red', 'Ghanti Khuile'] },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Add New Category Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition duration-200"
      >
        <i className="fas fa-plus mr-2"></i>
        Add New Category
      </button>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {category.animal_type}
            </h2>
            <p className="text-gray-700">
              <strong>Breeds:</strong> {category.breeds.join(', ')}
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Add New Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add New Category</h3>
            <input
              type="text"
              placeholder="Animal Type"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <textarea
              placeholder="Breeds (comma-separated)"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategory;
