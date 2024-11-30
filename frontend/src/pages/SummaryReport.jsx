import React from 'react';

const vaccinationData = [
  {
    vaccine: 'FMD Vaccine',
    lastVaccinated: '2024-05-12',
    nextVaccination: '2024-11-12',
    frequency: 'Every 6 months',
    weight: 'Stable',
    temperature: 'Slightly Raised',
    production: 'Normal',
  },
  {
    vaccine: 'Brucellosis Vaccine',
    lastVaccinated: '2024-04-20',
    nextVaccination: '2024-10-20',
    frequency: 'Every 8 months',
    weight: 'Stable',
    temperature: 'Normal',
    production: 'Normal',
  },
];

const VaccinationReport = () => {
  const matchingVaccines = vaccinationData;

  // Calculate summary information
  const totalVaccines = matchingVaccines.length;

  // Calculate overall status for weight, temperature, and production
  const stableWeightCount = matchingVaccines.filter((vaccine) => vaccine.weight === 'Stable').length;
  const raisedTemperatureCount = matchingVaccines.filter((vaccine) => vaccine.temperature === 'Slightly Raised').length;
  const normalProductionCount = matchingVaccines.filter((vaccine) => vaccine.production === 'Normal').length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Vaccine Report</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-300 text-gray-800">
                <th className="border py-3 px-4 text-left">Animal Type</th>
                <th className="border py-3 px-4 text-left">Breed</th>
                <th className="border py-3 px-4 text-left">Age</th>
                <th className="border py-3 px-4 text-left">Vaccine</th>
                <th className="border py-3 px-4 text-left">Last Vaccinated</th>
                <th className="border py-3 px-4 text-left">Next Vaccination</th>
                <th className="border py-3 px-4 text-left">Frequency</th>
                <th className="border py-3 px-4 text-left">Weight</th>
                <th className="border py-3 px-4 text-left">Temperature</th>
                <th className="border py-3 px-4 text-left">Production</th>
              </tr>
            </thead>
            <tbody>
              {matchingVaccines.map((vaccine, index) => (
                <tr key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                  <td className="border py-2 px-4">Cow</td>
                  <td className="border py-2 px-4">HTerai Cattle</td>
                  <td className="border py-2 px-4">10 years</td>
                  <td className="border py-2 px-4">{vaccine.vaccine}</td>
                  <td className="border py-2 px-4">{vaccine.lastVaccinated}</td>
                  <td className="border py-2 px-4">{vaccine.nextVaccination}</td>
                  <td className="border py-2 px-4">{vaccine.frequency}</td>
                  <td className="border py-2 px-4 text-center">{vaccine.weight}</td>
                  <td className="border py-2 px-4 text-center">{vaccine.temperature}</td>
                  <td className="border py-2 px-4 text-center">{vaccine.production}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Report */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Summary Report</h3>
          <p className="text-lg mb-2">Total Number of Vaccinations: <span className="font-bold text-gray-700">{totalVaccines}</span></p>
          <p className="text-lg mb-2">Weight Status: <span className="font-bold text-gray-700">{stableWeightCount} animals with stable weight</span>.</p>
          <p className="text-lg mb-2">Temperature Status: <span className="font-bold text-gray-700">{raisedTemperatureCount} animals with a slight raise in temperature</span>.</p>
          <p className="text-lg mb-4">Production Status: <span className="font-bold text-gray-700">{normalProductionCount} animals with normal milk production</span>.</p>

          <div className="mt-4">
            <h4 className="text-xl font-semibold text-gray-800">Upcoming Vaccination Details</h4>
            <ul className="text-left mt-2">
              {matchingVaccines.map((vaccine, index) => (
                <li key={index} className="mt-2">
                  <strong className="text-gray-700">{vaccine.vaccine}</strong>: Next vaccination scheduled for <span className="font-semibold text-gray-600">{vaccine.nextVaccination}</span>.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationReport;
