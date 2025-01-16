import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileUpload = () => {
  const [fileData, setFileData] = useState(null);
  const [fileName, setFileName] = useState('');
  const [manualData, setManualData] = useState({
    animal_type: '',
    breed: '',
    size: '',
    weight: '',
    height_at_wither: '',
    lifespan: '',
    average_temperature: '',
    age_data: [],
  });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);

    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension === 'csv') {
      const reader = new FileReader();
      reader.onload = () => {
        const text = reader.result;
        const rows = text.split('\n').map((row) => row.split(','));
        setFileData(rows);
      };
      reader.readAsText(file);
    } else if (fileExtension === 'xlsx') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setFileData(jsonData);
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert('Please upload a valid CSV or XLSX file.');
    }
  };

  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    setManualData({
      ...manualData,
      [name]: value,
    });
  };

  const handleAgeDataChange = (index, field, value) => {
    const updatedAgeData = [...manualData.age_data];
    updatedAgeData[index][field] = value;
    setManualData({
      ...manualData,
      age_data: updatedAgeData,
    });
  };

  const handleAddAgeData = () => {
    setManualData({
      ...manualData,
      age_data: [
        ...manualData.age_data,
        {
          age_range: { min: '', max: '' },
          weight_range: { min: '', max: '' },
          growth_rate: '',
        },
      ],
    });
  };

  const handleSubmitManualData = () => {
    console.log('Submitting manual data:', manualData);
    // Submit the data to your backend or API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Upload Animal Benchmark Data</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="file-upload">
            Choose file (.csv or .xlsx)
          </label>
          <input
            type="file"
            id="file-upload"
            accept=".csv, .xlsx"
            onChange={handleFileUpload}
            className="mt-2 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:mr-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100 transition duration-300 ease-in-out"
          />
        </div>

        {fileData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">File Data Preview:</h3>
            <pre className="bg-gray-100 p-6 rounded text-sm text-gray-700 font-mono overflow-x-auto">
              {JSON.stringify(fileData, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Manual Data Entry</h3>
          <form>
            <div className="grid grid-cols-2 gap-6">
              {['animal_type', 'breed', 'size', 'weight', 'height_at_wither', 'lifespan', 'average_temperature'].map((field, idx) => (
                <div key={idx} className="mb-4">
                  <label className="block text-gray-700">{field.replace(/_/g, ' ').toUpperCase()}</label>
                  <input
                    type="text"
                    name={field}
                    value={manualData[field]}
                    onChange={handleManualInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 ease-in-out"
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700">Age Data</h4>
              {manualData.age_data.map((ageEntry, index) => (
                <div key={index} className="mb-6 border p-4 rounded-lg shadow-md bg-gray-50">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700">Age Range (Min)</label>
                      <input
                        type="number"
                        value={ageEntry.age_range.min}
                        onChange={(e) =>
                          handleAgeDataChange(index, 'age_range.min', e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Age Range (Max)</label>
                      <input
                        type="number"
                        value={ageEntry.age_range.max}
                        onChange={(e) =>
                          handleAgeDataChange(index, 'age_range.max', e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                      <label className="block text-gray-700">Weight Range (Min)</label>
                      <input
                        type="number"
                        value={ageEntry.weight_range.min}
                        onChange={(e) =>
                          handleAgeDataChange(index, 'weight_range.min', e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Weight Range (Max)</label>
                      <input
                        type="number"
                        value={ageEntry.weight_range.max}
                        onChange={(e) =>
                          handleAgeDataChange(index, 'weight_range.max', e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700">Growth Rate</label>
                    <input
                      type="text"
                      value={ageEntry.growth_rate}
                      onChange={(e) =>
                        handleAgeDataChange(index, 'growth_rate', e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddAgeData}
                className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Add Age Data Entry
              </button>
            </div>

            <button
              type="button"
              onClick={handleSubmitManualData}
              className="w-full bg-green-500 text-white py-3 mt-6 rounded-md hover:bg-green-600 transition duration-200 ease-in-out"
            >
              Submit Manual Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
