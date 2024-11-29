import React, { useState } from 'react';

const ReportTrack = () => {
  const [formData, setFormData] = useState({
    weight: '',
    temperature: '',
    milkProduction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Daily Report Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daily Report</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">
              Weight
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Enter weight in kg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="temperature" className="block text-gray-700 font-medium mb-2">
              Temperature
            </label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Enter temperature in °C)"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="milkProduction" className="block text-gray-700 font-medium mb-2">
              Milk Production
            </label>
            <input
              type="text"
              id="milkProduction"
              name="milkProduction"
              value={formData.milkProduction}
              onChange={handleChange}
              placeholder="Enter amount of milk production in litres"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportTrack;
