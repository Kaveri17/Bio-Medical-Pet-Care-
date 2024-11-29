import React from 'react';
import { Link } from 'react-router-dom';

const HealthTrack = () => {
  
  const weeklyData = [
    { day: 'Sunday', weight: '450 kg', milk: '5 liters', temperature: '38.5°C' },
    { day: 'Monday', weight: '452 kg', milk: '5.2 liters', temperature: '38.6°C' },
    { day: 'Tuesday', weight: '451 kg', milk: '5 liters', temperature: '38.5°C' },
    { day: 'Wednesday', weight: '453 kg', milk: '2 liters', temperature: '38.7°C' },
    { day: 'Thursday', weight: '450 kg', milk: '5 liters', temperature: '38.5°C' },
    { day: 'Friday', weight: '454 kg', milk: '5.3 liters', temperature: '38.8°C' },
    { day: 'Saturday', weight: '452 kg', milk: '5.1 liters', temperature: '38.6°C' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col justify-center items-center p-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center">Cow's Daily Data Track</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl border border-blue-300">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Day</th>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Weight</th>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Milk Production</th>
              <th className="border border-gray-300 text-left px-4 py-2 bg-blue-500 text-white">Temperature</th>
            </tr>
          </thead>
          <tbody>
            {weeklyData.map((data, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-gray-700">{data.day}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{data.weight}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{data.milk}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-800 font-semibold">{data.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/reporttrack">
        <button className="bg-blue-600 text-white px-6 py-2 rounded mt-6 hover:bg-blue-700 transition duration-200 shadow-md w-full sm:w-auto">
          Add Daily Report Tracking
        </button>
      </Link>

      <Link to="/vaccinationreport">
        <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 transition duration-200 shadow-md w-full sm:w-auto">
          Check Report
        </button>
      </Link>
    </div>
  );
};

export default HealthTrack;
