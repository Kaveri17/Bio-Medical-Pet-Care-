import React from 'react';

// Card component for individual data points
const DataCard = ({ title, value, isAbnormal }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/4">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div
        className={`text-xl font-medium ${
          isAbnormal ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {value}
      </div>
    </div>
  );
};

const Reports = () => {
  // Example data
  const reportData = [
    { id: 1, temperature: 99, weight: 99, milkProduction: 4 },
  ];

  // Thresholds for abnormalities
  const thresholds = {
    temperature: { min: 98.5, max: 103 },
    weight: { min: 80, max: 150 },
    milkProduction: { min: 5, max: 10 },
  };

  // Function to determine if a value is abnormal
  const isAbnormal = (value, { min, max }) => value < min || value > max;

  return (
    <div className="w-5/6 mx-auto">
      <h1 className="text-2xl font-bold text-center">Summary Report</h1>
      <div className="pb-7 ps-5">
        <h1 className="py-3">
          Animal Type: <span>Cow</span>
        </h1>
        <h1>
          Breed: <span>Lulu</span>
        </h1>
      </div>

      {/* Loop through each report and display its data */}
      {reportData.map((report) => {
        // Check if the report has abnormalities
        const hasAbnormality =
          isAbnormal(report.temperature, thresholds.temperature) ||
          isAbnormal(report.weight, thresholds.weight) ||
          isAbnormal(report.milkProduction, thresholds.milkProduction);

        return (
          <div key={report.id} className="mb-10">
            <h2 className="text-xl font-bold mb-5">Report ID: {report.id}</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {/* Card Components for Temperature, Weight, and Milk Production */}
              <DataCard
                title="Temperature"
                value={report.temperature}
                isAbnormal={isAbnormal(report.temperature, thresholds.temperature)}
              />
              <DataCard
                title="Weight"
                value={report.weight}
                isAbnormal={isAbnormal(report.weight, thresholds.weight)}
              />
              <DataCard
                title="Milk Production"
                value={report.milkProduction}
                isAbnormal={isAbnormal(report.milkProduction, thresholds.milkProduction)}
              />
            </div>
            {/* Conclusion */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold">Conclusion:</h3>
              <p
                className={`text-lg font-medium ${
                  hasAbnormality ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {hasAbnormality
                  ? 'Abnormality found in milk production. Consult a vet immediately.'
                  : 'Your animal is healthy. Continue to monitor their health and ensure timely vaccinations.'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reports;
