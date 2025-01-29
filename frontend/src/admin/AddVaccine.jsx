import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../layout/AdminSidebar"; 

const AddVaccine = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    vaccineName: "",
    animalType: "",
    breed: "",
    frequency: "",
    duration: "",
    ageRangeMin: "", 
    ageRangeMax: "", 
  });

  // State for success message
  const [successMessage, setSuccessMessage] = useState("");

  // Breed options based on animal type
  const breedOptions = {
    dog: ["Labrador", "German Shepherd", "Golden Retriever", "Bulldog"],
    cow: ["Jersey", "Holstein", "Angus", "Hereford"],
    hen: ["Leghorn", "Rhode Island Red", "Plymouth Rock", "Sussex"],
  };

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict vaccine name to 30 characters
    if (name === "vaccineName" && value.length > 30) {
      return;
    }

    // Reset breed if animal type changes
    if (name === "animalType") {
      setFormData((prev) => ({ ...prev, breed: "", [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission (only frontend, no API)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { vaccineName, animalType, breed, frequency, duration, ageRangeMin, ageRangeMax } = formData;

    // Validation check
    if (!vaccineName || !animalType || !breed || !frequency || !duration || !ageRangeMin || !ageRangeMax) {
      alert("Please fill in all fields");
      return;
    }

    // Age validation
    if (ageRangeMin <= 0 || ageRangeMax <= 0) {
      alert("Age can't be negative or zero.");
      return;
    }

    if (ageRangeMax > 70) {
      alert("Please enter a valid age.");
      return;
    }

    if (ageRangeMin > ageRangeMax) {
      alert("Minimum age can't be greater than maximum age.");
      return;
    }

    // Simulate vaccine addition
    setSuccessMessage("Vaccine added successfully!");

    // Reset form
    setFormData({
      vaccineName: "",
      animalType: "",
      breed: "",
      frequency: "",
      duration: "",
      ageRangeMin: "",
      ageRangeMax: ""
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-[250px]"> {/* Leave space for sidebar */}
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Add Vaccine
          </h2>

          {/* Success message */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Vaccine Name */}
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
                maxLength={30}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter vaccine name"
              />
            </div>

            {/* Animal Type */}
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
                <option value="dog">Dog</option>
                <option value="cow">Cow</option>
                <option value="hen">Hen</option>
              </select>
            </div>

            {/* Breed (Changes dynamically based on Animal Type) */}
            <div>
              <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-2">
                Breed
              </label>
              <select
                id="breed"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                disabled={!formData.animalType} // Disable if no animal type is selected
              >
                <option value="">Select Breed</option>
                {formData.animalType &&
                  breedOptions[formData.animalType].map((breed) => (
                    <option key={breed} value={breed}>{breed}</option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                <option value="">Select Frequency</option>
                <option value="weekly">Weekly</option>
                <option value="6-months">Every 6 Months</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                Duration 
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter duration"
              />
            </div>

            {/* Age Range Minimum */}
            <div>
              <label htmlFor="ageRangeMin" className="block text-sm font-medium text-gray-700 mb-2">
                Age Range Minimum 
              </label>
              <input
                type="number"
                id="ageRangeMin"
                name="ageRangeMin"
                value={formData.ageRangeMin}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Age Range Maximum */}
            <div>
              <label htmlFor="ageRangeMax" className="block text-sm font-medium text-gray-700 mb-2">
                Age Range Maximum 
              </label>
              <input
                type="number"
                id="ageRangeMax"
                name="ageRangeMax"
                value={formData.ageRangeMax}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
              Add Vaccine
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVaccine;
