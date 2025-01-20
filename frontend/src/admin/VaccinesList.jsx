import React from "react";
import { FaSyringe } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const VaccinesList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vaccines } = location.state;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold pb-6 text-center text-blue-700">
        All Vaccines
      </h1>

      {/* Vaccination Table */}
      <div className="vaccines-list-container w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-blue-300">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-4 px-6 text-left text-blue-800">
                Vaccine Name
              </th>
              <th className="py-4 px-6 text-left text-blue-800">Animal Type</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition duration-300"
              >
                <td className="py-3 px-6 flex items-center space-x-4">
                  {/* Syringe icon next to vaccine name */}
                  <div className="bg-orange-100 p-2 rounded-full">
                    <FaSyringe className="text-orange-600 text-xl" />
                  </div>
                  <span className="font-semibold text-gray-800">
                    {vaccine.name}
                  </span>
                </td>
                <td className="py-3 px-6 text-gray-700">{vaccine.animal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleBack}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-l transition duration-300 shadow-md transform hover:scale-105"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default VaccinesList;
