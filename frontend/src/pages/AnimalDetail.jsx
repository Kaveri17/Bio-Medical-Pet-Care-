import React, { useState } from 'react';

const AnimalDetailForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    breed: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Animal Details Submitted:', formData);

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Animal Details</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
              Animal Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter animal type"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="breed" className="block text-gray-700 font-medium mb-2">
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Enter breed"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            />
          </div>

   
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Animal
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnimalDetailForm;
