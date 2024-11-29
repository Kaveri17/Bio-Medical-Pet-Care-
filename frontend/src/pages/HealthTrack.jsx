import React from 'react';
import { Link } from 'react-router-dom';

const HealthTrack = () => {
  // Sample data for cow health metrics
  const cowData = {
    weight: '450 kg',
    milk: '5 liters/day',
    temperature: '38.5°C',
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cow previous data track</h2>
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-400">Metric</th>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-400">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Weight</td>
              <td className="border border-gray-300 px-4 py-2">{cowData.weight}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Milk Production</td>
              <td className="border border-gray-300 px-4 py-2">{cowData.milk}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Temperature</td>
              <td className="border border-gray-300 px-4 py-2">{cowData.temperature}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Daily Report Tracking button */}
      <Link to="/reporttrack">
      <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4 hover:bg-blue-600 transition duration-200">
       Add Daily Report Tracking
      </button>
      </Link>
    </div>
  );
};

export default HealthTrack;
