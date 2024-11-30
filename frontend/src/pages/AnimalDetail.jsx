import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AnimalDetailForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    breed: '',
    gender: '',
    age: ''
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'age' && (value < 1 || isNaN(value))) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Animal Details Submitted:', formData);
    // You can add logic to navigate to the AnimalDetail page after submission if needed
    navigate('/animal-detail', { state: { animal: formData } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-blue-300">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Add Animal Details</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Animal Type</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Dog"
                  checked={formData.type === 'Dog'}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Dog
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Cow"
                  checked={formData.type === 'Cow'}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Cow
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Hen"
                  checked={formData.type === 'Hen'}
                  onChange={handleRadioChange}
                  className="mr-2"
                />
                Hen
              </label>
            </div>
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age in years"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
              min="1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Add Animal
          </button>
        </form>
        
        {/* Add a sample card for demonstration */}
        <Link to="/animal-detail" state={{ animal: formData }}>
          <div className="mt-4 p-4 border border-blue-300 rounded cursor-pointer hover:bg-blue-50 transition">
            <h3 className="text-xl font-bold">Sample Animal Card</h3>
            <p>Type: {formData.type}</p>
            <p>Breed: {formData.breed}</p>
            <p>Gender: {formData.gender}</p>
            <p>Age: {formData.age} years</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnimalDetailForm;
