

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getUserAnimalById } from "../api/Add";
// import { generateWeeklyReport } from "../api/healthreport";
// import DatePicker from "react-datepicker"; // Import the date picker
// import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker

// const DataCard = ({ title, value }) => (
//   <div className="bg-blue-200 shadow-md rounded-lg px-6 mb-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/4 py-8">
//     <h3 className="text-lg font-semibold mb-3 text-center tracking-wider">
//       {title}
//     </h3>
//     <div className={`text-xl font-semibold text-center`}>{value}</div>
//   </div>
// );

// const Reports = () => {
//   const { id } = useParams();
//   const [reportData, setReportData] = useState(null);
//   const [animalDetails, setAnimalDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(new Date()); // State to hold selected date

//   // Function to get the start and end of the week
//   const getWeekRange = (date) => {
//     const start = new Date(date);
//     start.setDate(start.getDate() - start.getDay()); // Start of the week (Sunday)
//     const end = new Date(start);
//     end.setDate(start.getDate() + 6); // End of the week (Saturday)
//     return {
//       startDate: start.toISOString().split("T")[0], // Format YYYY-MM-DD
//       endDate: end.toISOString().split("T")[0],
//     };
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const animalData = await getUserAnimalById(id);
//         setAnimalDetails(animalData);

//         // Get start and end of the week from selectedDate
//         const { startDate, endDate } = getWeekRange(selectedDate);
//         console.log("Fetching weekly report for:", startDate, "to", endDate); // Debugging log

//         // Fetch the weekly report with correct date range
//         const reportData = await generateWeeklyReport(id, startDate, endDate);
//         setReportData(reportData.report);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id, selectedDate]); // Add selectedDate as dependency

//   if (loading) {
//     return <p className="text-center text-gray-500">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className="w-5/6 mx-auto py-5">
//       <h1 className="text-3xl font-bold text-center">Summary Report</h1>
      
//       {/* Date Picker */}
//       <div className="pb-7 ps-5">
//         <h2 className="text-lg font-medium">Select Report Date:</h2>
//         <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)} // Update the selected date
//           dateFormat="yyyy-MM-dd"
//           className="border px-4 py-2 rounded-lg mt-2"
//         />
//       </div>

//       {/* Animal Details */}
//       <div className="pb-7 ps-5">
//         <h1 className="py-3 text-xl font-medium">
//           Animal Type:{" "}
//           <span className=" text-lg font-normal">
//             {animalDetails.animal_type?.animal_type || "Unknown Animal Type"}
//           </span>
//         </h1>
//         <h1 className=" text-xl font-medium">
//           Breed:{" "}
//           <span className=" text-lg font-normal">
//             {animalDetails.breed?.breed_name}
//           </span>
//         </h1>
//       </div>

//       {/* Weekly Health Report */}
//       {reportData ? (
//         <div className="mb-10">
//           <h2 className="text-xl font-bold mb-5">Weekly Health Report</h2>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <DataCard
//               title="Temperature"
//               value={reportData?.avgTemperature || "N/A"}
//             />
//             <DataCard
//               title="Weight"
//               value={reportData?.avgWeight || "N/A"}
//             />
//             {(animalDetails?.animal_type?.animal_type === "Cow" ||
//               animalDetails?.animal_type?.animal_type === "Chicken") && (
//               <DataCard
//                 title={`${
//                   animalDetails?.animal_type?.animal_type === "Cow"
//                     ? "Milk Production (litres)"
//                     : "Egg Production"
//                 }`}
//                 value={reportData?.avgProduction || "N/A"}
//               />
//             )}
//           </div>
//           <div className="mt-5">
//             <h3 className="text-xl font-semibold">Conclusion:</h3>
//             {reportData?.healthStatus === "Healthy" ? (
//               <p className="text-lg font-medium text-green-400">
//                 Your animal is healthy. Continue to monitor their health.
//               </p>
//             ) : (
//               <p className="text-lg font-medium text-red-400">
//                 Abnormal Health Report. Consult a vet immediately.
//               </p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="text-center text-red-500 text-lg font-semibold mt-10">
//           No records found for this animal this week.
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reports;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserAnimalById } from "../api/Add";
import { generateWeeklyReport } from "../api/healthreport";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import styles for the date picker

const DataCard = ({ title, value }) => (
  <div className="bg-blue-200 shadow-md rounded-lg px-6 mb-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/4 py-8">
    <h3 className="text-lg font-semibold mb-3 text-center tracking-wider">
      {title}
    </h3>
    <div className={`text-xl font-semibold text-center`}>{value}</div>
  </div>
);

const Reports = () => {
  const { id } = useParams();
  const [reportData, setReportData] = useState(null);
  const [animalDetails, setAnimalDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default: today

  // Function to get the start and end of the week
  const getWeekRange = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay()); // Start of the week (Sunday)
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // End of the week (Saturday)
    return {
      startDate: start.toISOString().split("T")[0], // Format YYYY-MM-DD
      endDate: end.toISOString().split("T")[0],
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const animalData = await getUserAnimalById(id);
        setAnimalDetails(animalData);

        // Get start and end of the week from selectedDate
        const { startDate, endDate } = getWeekRange(selectedDate);
        console.log("Fetching weekly report for:", startDate, "to", endDate);

        // Fetch the weekly report
        const reportData = await generateWeeklyReport(id, startDate, endDate);
        setReportData(reportData.report);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, selectedDate]); // Re-fetch data when the selected date changes

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="w-5/6 mx-auto py-5">
      <h1 className="text-3xl font-bold text-center">Summary Report</h1>

      {/* Date Picker */}
      <div className="pb-7 ps-5">
        <h2 className="text-lg font-medium ">Select Report Date:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)} // Update the selected date
          dateFormat="yyyy-MM-dd"
          className="border px-4 py-2 rounded-lg mt-2 "
          maxDate={new Date()} // Prevent future date selection
        />
      </div>

      {/* Animal Details */}
      <div className="pb-7 ps-5">
        <h1 className="py-3 text-xl font-medium">
          Animal Type:{" "}
          <span className=" text-lg font-normal">
            {animalDetails.animal_type?.animal_type || "Unknown Animal Type"}
          </span>
        </h1>
        <h1 className=" text-xl font-medium">
          Breed:{" "}
          <span className=" text-lg font-normal">
            {animalDetails.breed?.breed_name}
          </span>
        </h1>
      </div>

      {/* Weekly Health Report */}
      {reportData ? (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-5">Weekly Health Report</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <DataCard title="Temperature" value={reportData?.avgTemperature || "N/A"} />
            <DataCard title="Weight" value={reportData?.avgWeight || "N/A"} />
            {(animalDetails?.animal_type?.animal_type === "Cow" ||
              animalDetails?.animal_type?.animal_type === "Chicken") && (
              <DataCard
                title={`${
                  animalDetails?.animal_type?.animal_type === "Cow"
                    ? "Milk Production (litres)"
                    : "Egg Production"
                }`}
                value={reportData?.avgProduction || "N/A"}
              />
            )}
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Conclusion:</h3>
            {reportData?.healthStatus === "Healthy" ? (
              <p className="text-lg font-medium text-green-400">
                Your animal is healthy. Continue to monitor their health.
              </p>
            ) : (
              <p className="text-lg font-medium text-red-400">
                Abnormal Health Report. Consult a vet immediately.
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center text-red-500 text-lg font-semibold mt-10">
          No records found for this animal this week.
        </div>
      )}
    </div>
  );
};

export default Reports;
