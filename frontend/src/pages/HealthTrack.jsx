import React from 'react';
import { Link } from 'react-router-dom';

const HealthTrack = () => {
  
  const cowData = {
    weight: '450 kg',
    milk: '5 liters/day',
    temperature: '38.5°C',
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center p-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Cow's Previous Data Track</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl border border-blue-300">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Metric</th>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-gray-700">Weight</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{cowData.weight}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-gray-700">Milk Production</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{cowData.milk}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 text-gray-700">Temperature</td>
              <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{cowData.temperature}</td>
            </tr>
          </tbody>
        </table>
      </div>

 
      <Link to="/reporttrack">
        <button className="bg-blue-600 text-white px-6 py-2 rounded mt-6 hover:bg-blue-700 transition duration-200 shadow-md">
          Add Daily Report Tracking
        </button>
      </Link>
    </div>
  );
};

export default HealthTrack;
