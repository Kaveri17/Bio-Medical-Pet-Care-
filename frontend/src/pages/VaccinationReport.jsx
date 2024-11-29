import React from 'react';

const vaccinationData = [
  {
    vaccine: 'FMD Vaccine',
    lastVaccinated: '2024-05-12',
    nextVaccination: '2024-11-12',
    frequency: 'Every 6 months',
  },
  {
    vaccine: 'Brucellosis Vaccine',
    lastVaccinated: '2024-04-20',
    nextVaccination: '2024-10-20',
    frequency: 'Every 6 months',
  },
];

const VaccinationReport = () => {

  const matchingVaccines = vaccinationData;

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
      <div className="text-center w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-bl">Vaccine Report</h2>
        <div className="mt-8 bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
          {/* <h3 className="text-lg font-semibold mb-2 text-gray-800">Vaccination Details:</h3> */}
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border py-2 px-4 text-left">Animal Type</th>
                <th className="border py-2 px-4 text-left">Breed</th>
                <th className="border py-2 px-4 text-left">Age</th>
                <th className="border py-2 px-4 text-left">Vaccine</th>
                <th className="border py-2 px-4 text-left">Last Vaccinated</th>
                <th className="border py-2 px-4 text-left">Next Vaccination</th>
                <th className="border py-2 px-4 text-left">Frequency</th>
              </tr>
            </thead>
            <tbody>
              {matchingVaccines.map((vaccine, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border py-2 px-4">Cow</td>
                  <td className="border py-2 px-4">HTerai Cattle</td>
                  <td className="border py-2 px-4">10 years</td>
                  <td className="border py-2 px-4">{vaccine.vaccine}</td>
                  <td className="border py-2 px-4">{vaccine.lastVaccinated}</td>
                  <td className="border py-2 px-4">{vaccine.nextVaccination}</td>
                  <td className="border py-2 px-4">{vaccine.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VaccinationReport;
