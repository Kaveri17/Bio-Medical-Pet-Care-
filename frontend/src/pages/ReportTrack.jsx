import React, { useState } from 'react';

let API = "http://localhost:5000/api";

import axios from 'axios';
const ReportTrack = () => {
   const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ4YjI1ODAyNWZmMzg2Y2M1ODU1ZGUiLCJpYXQiOjE3MzI4NzQ3MDgsImV4cCI6MTczMzQ3OTUwOH0.avq6CkMMr2PYiQ_qpI7PVV8pnxWyhzaBRE5WA9AxtmQ"

   const [formData, setFormData] = useState({

    weight: '',
    temperature: '',
    milkProduction: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!formData.weight || !formData.temperature || !formData.milkProduction) {
      setError("All fields are required!");
      return;
    }

    setError('');
    
    try {
      // Make POST request with Axios
      const response = await axios.post(`${API}/daily/dailyrecord`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
     

      // Handle successful response
      setSuccess(true);
      setFormData({ weight: '', temperature: '', milkProduction: '' });  // Reset form data
    } catch (err) {
      // Log full error response
      console.error("API Error:", err);

      // Handle different types of error responses
      if (err.response) {
        // API responded with an error (e.g., 400 or 500 status)
        setError(err.response.data?.error || err.response.data?.message || "An error occurred.");
      } else if (err.request) {
        // No response was received (e.g., network error)
        setError("No response received from the server.");
      } else {
        // Other errors (e.g., setup issues)
        setError(`Error: ${err.message}`);
      }

      setSuccess(false);
    }
  };
 
  // const [formData, setFormData] = useState({
  //   weight: '',
  //   temperature: '',
  //   milkProduction: '',
  // });

  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState(false);
  

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!formData.weight || !formData.temperature || !formData.milkProduction) {
  //     setError("All fields are required!");
  //     return;
  //   }

  
  //   setError(''); 
  //   try {
  //     const response = 
  //     await axios.post(
  //       `${API}/daily/dailyrecord`, 
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );

  //     setSuccess(true); // Show success message if the request is successful
  //     setFormData({ weight: '', temperature: '', milkProduction: '' }); // Clear form data
  //   } catch (err) {
  //     setError(err.response?.data?.error || "An error occurred while submitting the report.");
  //     setSuccess(false);
  //   } // Reset loading state after the request is finished
    
  // };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-blue-300">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Daily Report</h2>
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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
              placeholder="Enter temperature in °C"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Add Report
                  </button>
        </form>
        {error && <div className="error">{typeof error === 'object' ? JSON.stringify(error) : error}</div>}
{success && <div className="success">Report submitted successfully!</div>}

      </div>
    </div>
  );
};

export default ReportTrack;