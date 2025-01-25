import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVaccine = () => {
  const navigate = useNavigate();

  // State for the form data
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

  // Handle change in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (only frontend, no API)
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      vaccineName,
      animalType,
      breed,
      frequency,
      duration,
      ageRangeMin,
      ageRangeMax,
    } = formData;

    // Validation check
    if (
      !vaccineName ||
      !animalType ||
      !breed ||
      !frequency ||
      !duration ||
      !ageRangeMin ||
      !ageRangeMax
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Simulate vaccine addition
    setSuccessMessage("Vaccine added successfully!");

    // Reset form after submission (optional)
    setFormData({
      vaccineName: "",
      animalType: "",
      breed: "",
      frequency: "",
      duration: "",
      ageRangeMin: "",
      ageRangeMax: "",
    });

    // Optionally, navigate to another page or reset the form
    // navigate("/admin/add-vaccine"); // Uncomment to navigate if needed
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
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
          <div>
            <label
              htmlFor="vaccineName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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
            <label
              htmlFor="animalType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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

          <div>
            <label
              htmlFor="breed"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter breed"
            />
          </div>

          <div>
            <label
              htmlFor="frequency"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Frequency
            </label>
            <input
              type="text"
              id="frequency"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter frequency"
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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

          <div>
            <label
              htmlFor="ageRangeMin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age Range Minimum (in years)
            </label>
            <input
              type="number"
              id="ageRangeMin"
              name="ageRangeMin"
              value={formData.ageRangeMin}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter minimum age range"
            />
          </div>

          <div>
            <label
              htmlFor="ageRangeMax"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age Range Maximum (in years)
            </label>
            <input
              type="number"
              id="ageRangeMax"
              name="ageRangeMax"
              value={formData.ageRangeMax}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter maximum age range"
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
