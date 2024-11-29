import React, { useState } from 'react';

const vaccinationData = [
  {
    disease: 'Foot and Mouth Disease',
    symptoms: ['fever', 'blisters', 'drooling', 'loss of appetite'],
    vaccine: 'FMD Vaccine',
  },
  {
    disease: 'Bovine Respiratory Disease',
    symptoms: ['cough', 'nasal discharge', 'fever', 'lethargy'],
    vaccine: 'BRD Vaccine',
  },
  {
    disease: 'Brucellosis',
    symptoms: ['fever', 'weakness', 'swollen joints', 'reduced milk production'],
    vaccine: 'Brucellosis Vaccine',
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
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Vaccine Report Checker</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <label htmlFor="symptoms" className="block text-gray-700 font-medium mb-2">
          Enter Symptoms:
        </label>
        <input
          type="text"
          id="symptoms"
          value={inputSymptoms}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-300"
          placeholder="e.g., fever, blisters, cough"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 mt-4"
        >
          Check Vaccine
        </button>
      </form>

      {matchingVaccines.length > 0 && (
        <div className="mt-8 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Matching Vaccines:</h3>
          <ul>
            {matchingVaccines.map((vaccine, index) => (
              <li key={index} className="mb-2">
                <strong>Disease:</strong> {vaccine.disease} <br />
                <strong>Vaccine:</strong> {vaccine.vaccine}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VaccinationReport;
