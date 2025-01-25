import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5001/api";

const AddVaccine = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vaccineName: "",
    animalType: "",
    breeds: "",
    frequency: "",
    duration: "",
    ageRangeMin: "",
    ageRangeMax: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const {
      vaccineName,
      animalType,
      breeds,
      frequency,
      duration,
      ageRangeMin,
      ageRangeMax,
    } = formData;

    // Validate fields
    if (
      !vaccineName ||
      !animalType ||
      !breeds ||
      !frequency ||
      !duration ||
      !ageRangeMin ||
      !ageRangeMax
    ) {
      setError("All fields are required.");
      return;
    }

    const vaccineData = {
      vaccine_name: vaccineName,
      animal_type: animalType,
      breeds,
      frequency,
      duration: parseInt(duration, 10),
      age_range: {
        min: parseInt(ageRangeMin, 10),
        max: parseInt(ageRangeMax, 10),
      },
    };

    setLoading(true);
    try {
      await axios.post(`${API}/vaccine/addvaccine`, vaccineData);
      alert("Vaccine added successfully!");
      navigate("/admin/add-vaccine");
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to add vaccine. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold pb-6 text-center text-green-700">
          Add Vaccine
        </h1>
        {error && (
          <p className="text-red-600 text-center mb-4">{error}</p>
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
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
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
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            >
              <option value="">Select Animal Type</option>
              <option value="Dog">Dog</option>
              <option value="Cow">Cow</option>
              <option value="Hen">Hen</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="breeds"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Breeds
            </label>
            <input
              type="text"
              id="breeds"
              name="breeds"
              value={formData.breeds}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Enter breeds (e.g., Golden Retriever)"
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
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="How often is it given?"
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Duration (Months)
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Duration in months"
            />
          </div>

          <div>
            <label
              htmlFor="ageRangeMin"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age Range - Min (Years)
            </label>
            <input
              type="number"
              id="ageRangeMin"
              name="ageRangeMin"
              value={formData.ageRangeMin}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Minimum age in years"
              min="0"
            />
          </div>

          <div>
            <label
              htmlFor="ageRangeMax"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Age Range - Max (Years)
            </label>
            <input
              type="number"
              id="ageRangeMax"
              name="ageRangeMax"
              value={formData.ageRangeMax}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
              placeholder="Maximum age in years"
              min="0"
            />
          </div>

          <button
            type="submit"
            className={`w-full px-6 py-3 rounded-lg shadow-md text-white transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Add Vaccine"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVaccine;
