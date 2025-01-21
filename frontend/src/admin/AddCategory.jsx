import React, { useState } from "react";

const AddCategory = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4">
      {/* Centered Add Category Button at the Top */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition duration-200"
        >
          + Add Category
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto bg-white shadow rounded-lg p-4 mt-8">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-6 py-3">#</th>
              <th className="border border-gray-300 px-6 py-3">Animal Type</th>
              <th className="border border-gray-300 px-6 py-3">Breeds</th>
              <th className="border border-gray-300 px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="hover:bg-gray-100 transition duration-150">
              <td className="border border-gray-300 px-6 py-3 text-center">1</td>
              <td className="border border-gray-300 px-6 py-3">Dog</td>
              <td className="border border-gray-300 px-6 py-3">
                Golden Retriever, Labrador
              </td>
              <td className="border border-gray-300 px-6 py-3 text-center space-x-2">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow hover:bg-yellow-600 transition">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Add Category
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="animal_type"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Animal Type
                </label>
                <input
                  id="animal_type"
                  type="text"
                  placeholder="Enter animal type"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="breeds"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Breeds
                </label>
                <input
                  id="breeds"
                  type="text"
                  placeholder="Enter breeds (comma-separated)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategory;
