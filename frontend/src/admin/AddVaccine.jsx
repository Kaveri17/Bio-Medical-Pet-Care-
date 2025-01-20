import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVaccine = () => {
  const navigate = useNavigate();
  
 
  const [formData, setFormData] = useState({
    vaccineName: "",
    animalType: "",
    breeds: "",
    frequency: "",
    duration: "",
    ageRange: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { vaccineName, animalType, breeds, frequency, duration, ageRange } = formData;
    
    if (!vaccineName || !animalType || !breeds || !frequency || !duration || !ageRange) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Vaccine Added:", formData);

    navigate("/admin/vaccine-list");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Add Vaccine</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        
          <div>
            <label htmlFor="vaccineName" className="block text-sm font-medium text-gray-700 mb-2">
              Vaccine Name
            </label>
            <input
              type="text"
              id="vaccineName"
              name="vaccineName"
              value={formData.vaccineName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter vaccine name"
            />
          </div>

          
          <div>
            <label htmlFor="animalType" className="block text-sm font-medium text-gray-700 mb-2">
              Animal Type
            </label>
            <select
              id="animalType"
              name="animalType"
              value={formData.animalType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Animal Type</option>
              <option value="1">Dog</option>
              <option value="2">Cow</option>
              <option value="3">Cat</option>
            </select>
          </div>

         
          <div>
            <label htmlFor="breeds" className="block text-sm font-medium text-gray-700 mb-2">
              Breeds
            </label>
            <select
              id="breeds"
              name="breeds"
              value={formData.breeds}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="">Select Breeds</option>
              <option value="1">Golden Retriever</option>
              <option value="2">Labrador</option>
              <option value="3">Jersey</option>
            </select>
          </div>

      
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
              Frequency
            </label>
            <input
              type="text"
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="How often is it given?"
            />
          </div>

        
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
              Duration (Months)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Duration in months"
            />
          </div>

         
<div>
  <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-2">
    Age Range (Years)
  </label>
  <input
    type="number"
    id="ageRange"
    name="ageRange"
    value={formData.ageRange}
    onChange={handleChange}
    min="0" 
    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
    placeholder="Age range in years"
  />
</div>


      
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Add Vaccine
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVaccine;
