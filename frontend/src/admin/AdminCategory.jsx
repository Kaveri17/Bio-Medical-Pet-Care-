import React, { useState } from "react";

const AdminCategory = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Animal Categories</h2>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
      >
        Add Category
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
            {/* Example Row */}
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2">Dog</td>
              <td className="border border-gray-300 px-4 py-2">
                Golden Retriever, Labrador
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Add Category</h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="animal_type"
                  className="block text-sm font-medium mb-1"
                >
                  Animal Type
                </label>
                <input
                  id="animal_type"
                  type="text"
                  placeholder="Enter animal type"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="breeds"
                  className="block text-sm font-medium mb-1"
                >
                  Breeds
                </label>
                <input
                  id="breeds"
                  type="text"
                  placeholder="Enter breeds"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
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

export default AdminCategory;