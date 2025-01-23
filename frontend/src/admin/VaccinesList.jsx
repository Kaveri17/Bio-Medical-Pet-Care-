import React, { useState, useEffect } from "react";
import { FaSyringe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5001/api";

const VaccinesList = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await axios.get(`${API}/vaccines`);
        setVaccines(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load vaccines");
        setLoading(false);
      }
    };
    fetchVaccines();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-600">Loading vaccines...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold pb-6 text-center text-blue-700">
        All Vaccines
      </h1>
      <div className="vaccines-list-container w-full max-w-2xl bg-white p-6 rounded-lg shadow-xl">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-4 px-6 text-left">Vaccine Name</th>
              <th className="py-4 px-6 text-left">Animal Type</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr
                key={vaccine.id}
                className="border-b hover:bg-blue-50 transition duration-300"
              >
                <td className="py-3 px-6 flex items-center space-x-4">
                  <FaSyringe className="text-orange-600 text-xl" />
                  <span>{vaccine.vaccine_name}</span>
                </td>
                <td className="py-3 px-6">{vaccine.animal_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default VaccinesList;
