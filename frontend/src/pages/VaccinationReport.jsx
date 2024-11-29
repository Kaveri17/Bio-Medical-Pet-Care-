import React, { useState } from 'react';

const vaccinationData = [
  {
    disease: 'Foot and Mouth Disease',
    symptoms: ['fever', 'blisters', 'drooling', 'loss of appetite'],
    vaccine: 'FMD Vaccine',
    lastVaccinated: '2024-05-12',
    nextVaccination: '2024-11-12',
    frequency: 'Every 6 months',
  },

  {
    disease: 'Brucellosis',
    symptoms: ['fever', 'weakness', 'swollen joints', 'reduced milk production'],
    vaccine: 'Brucellosis Vaccine',
    lastVaccinated: '2024-04-20',
    nextVaccination: '2024-10-20',
    frequency: 'Every 6 months',
  },
];

const VaccinationReport = () => {
  const [inputSymptoms, setInputSymptoms] = useState('');
  const [matchingVaccines, setMatchingVaccines] = useState([]);

  const handleChange = (e) => {
    setInputSymptoms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const symptomsArray = inputSymptoms.toLowerCase().split(',').map(symptom => symptom.trim());
    const matches = vaccinationData.filter(vaccineInfo =>
      vaccineInfo.symptoms.some(symptom => symptomsArray.includes(symptom))
    );

    setMatchingVaccines(matches);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="text-center w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vaccine Report Checker</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <label htmlFor="symptoms" className="block text-gray-700 font-medium mb-2">
            Enter Symptoms:
          </label>
          <input
            type="text"
            id="symptoms"
            value={inputSymptoms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
            placeholder="Enter the symptoms"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200 mt-4"
          >
            Check Vaccines
          </button>
        </form>

        {matchingVaccines.length > 0 && (
          <div className="mt-8 bg-white p-4 rounded-lg shadow-lg overflow-x-auto">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Matching Vaccines:</h3>
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border py-2 px-4 text-left">Animal Type</th>
                  <th className="border py-2 px-4 text-left">Breed</th>
                  <th className="border py-2 px-4 text-left">Age</th>
                  <th className="border py-2 px-4 text-left">Disease</th>
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
                    <td className="border py-2 px-4">{vaccine.disease}</td>
                    <td className="border py-2 px-4">{vaccine.vaccine}</td>
                    <td className="border py-2 px-4">{vaccine.lastVaccinated}</td>
                    <td className="border py-2 px-4">{vaccine.nextVaccination}</td>
                    <td className="border py-2 px-4">{vaccine.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default VaccinationReport;
