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
  const totalVaccines = vaccinationData.length;
  const stableWeightCount = vaccinationData.filter((vaccine) => vaccine.weight === 'Stable').length;
  const raisedTemperatureCount = vaccinationData.filter((vaccine) => vaccine.temperature === 'Slightly Raised').length;
  const normalProductionCount = vaccinationData.filter((vaccine) => vaccine.production === 'Normal').length;

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-start">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Vaccination Report</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-200 text-gray-800">
                <th className="border py-2 px-4 text-left">Animal Type</th>
                <th className="border py-2 px-4 text-left">Vaccine</th>
                <th className="border py-2 px-4 text-left">Last Vaccinated</th>
                <th className="border py-2 px-4 text-left">Next Vaccination</th>
                <th className="border py-2 px-4 text-left">Frequency</th>
                {/* <th className="border py-2 px-4 text-left">Weight</th>
                <th className="border py-2 px-4 text-left">Temperature</th>
                <th className="border py-2 px-4 text-left">Production</th> */}
              </tr>
            </thead>
            <tbody>
              {vaccinationData.map((vaccine, index) => (
                <tr key={index} className="hover:bg-gray-50 transition duration-200 ease-in-out">
                  <td className="border py-2 px-4">Cow</td>
                  <td className="border py-2 px-4">{vaccine.vaccine}</td>
                  <td className="border py-2 px-4">{vaccine.lastVaccinated}</td>
                  <td className="border py-2 px-4">{vaccine.nextVaccination}</td>
                  <td className="border py-2 px-4">{vaccine.frequency}</td>
                  {/* <td className="border py-2 px-4 text-center">{vaccine.weight}</td>
                  <td className="border py-2 px-4 text-center">{vaccine.temperature}</td>
                  <td className="border py-2 px-4 text-center">{vaccine.production}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Report */}
        <div className="mt-6 p-6 bg-blue-200 rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Summary Report</h3>
  <p className="text-lg mb-2"><strong>Total Number of Vaccinations:</strong> <span className=" text-gray-700">{totalVaccines}</span></p>
  <p className="text-lg mb-2"><strong>Weight Status:</strong> <span className=" text-gray-700">{stableWeightCount} animals with stable weight</span></p>
  <p className="text-lg mb-2"><strong>Temperature Status:</strong> <span className=" text-gray-700">{raisedTemperatureCount} animals with a slight raise in temperature</span></p>
  <p className="text-lg mb-4"><strong>Production Status:</strong> <span className=" text-gray-700">{normalProductionCount} animals with normal milk production</span></p>

  <h4 className="text-xl font-semibold text-gray-800 mb-2"><strong>Upcoming Vaccination Details</strong></h4>
  <ul className="space-y-2">
    {vaccinationData.map((vaccine, index) => (
      <li key={index} className="text-gray-700">
        <strong className="font-semibold">{vaccine.vaccine}</strong>: Next vaccination scheduled for <span className="text-gray-600">{vaccine.nextVaccination}</span>.
      </li>
    ))}
  </ul>
</div>


        {/* Conclusion */}
        <div className="mt-6 p-4 bg-blue-300 text-center text-white rounded-lg shadow-md">
  <p className="text-lg font-semibold">Conclusion: Your animals are healthy and well-maintained. Continue to monitor their health and ensure timely vaccinations.</p>
</div>

      </div>
    </div>
  );
};

export default VaccinationReport;
