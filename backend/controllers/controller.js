import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserAnimalById } from "../api/Add";  
import { acceptVaccine, recommendVaccines, rejectVaccine } from "../api/Vaccine";  
import { getAcceptedVaccines, getRejectedVaccines } from "../api/Vaccine";  // Importing the new functions

const VaccinationReport = () => {
  const [animal, setAnimal] = useState(null);
  const [recommendedVaccines, setRecommendedVaccines] = useState([]); 
  const [acceptedVaccines, setAcceptedVaccines] = useState([]);  // State for accepted vaccines
  const [rejectedVaccines, setRejectedVaccines] = useState([]);  // State for rejected vaccines
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { id } = useParams();

  // Fetch Animal Details
  const fetchAnimalDetails = async () => {
    try {
      setLoading(true);
      const data = await getUserAnimalById(id);
      if (data?.error) {
        setError(data.error);
      } else {
        console.log("animal", data);
        setAnimal(data);
      }
    } catch (error) {
      setError("Failed to fetch animal details.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Recommended Vaccines
  const fetchRecommendedVaccines = async () => {
    try {
      const vaccines = await recommendVaccines(id);
      setRecommendedVaccines(vaccines || []);  
    } catch (error) {
      setError("Failed to fetch recommended vaccines.");
    }
  };

  // Fetch Accepted Vaccines
  const fetchAcceptedVaccines = async () => {
    try {
      const vaccines = await getAcceptedVaccines(id); 
      console.log("Accepted Vaccines:", vaccines); // Fetch accepted vaccines
      setAcceptedVaccines(vaccines || []);
    } catch (error) {
      setError("Failed to fetch accepted vaccines.");
    }
  };

  // Fetch Rejected Vaccines
  const fetchRejectedVaccines = async () => {
    try {
      const vaccines = await getRejectedVaccines(id); 
          console.log("Rejected Vaccines:", vaccines);   // Fetch rejected vaccines
      setRejectedVaccines(vaccines || []);
    } catch (error) {
      setError("Failed to fetch rejected vaccines.");
    }
  };

  useEffect(() => {
    fetchAnimalDetails();
    fetchRecommendedVaccines();  
    fetchAcceptedVaccines();  // Call the new functions
    fetchRejectedVaccines();
  }, [id]);

  // Accept Vaccine
  const handleAcceptVaccine = async (vaccineId) => {
    try {
      const data = await acceptVaccine(id, vaccineId);
      console.log("Vaccine accepted:", data);
      setAnimal(data); 
    } catch (error) {
      console.error("Error accepting vaccine:", error);
      setError("Failed to accept vaccine.");
    }
  };

  // Reject Vaccine
  const handleRejectVaccine = async (vaccineId) => {
    try {
      const data = await rejectVaccine(id, vaccineId);
      console.log("Vaccine rejected:", data);
      setAnimal(data);
    } catch (error) {
      console.error("Error rejecting vaccine:", error);
      setError("Failed to reject vaccine.");
    }
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="min-h-[85vh] bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Vaccination Report
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base bg-white rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border py-3 px-4 text-left">Vaccine</th>
                <th className="border py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Display Vaccines from Animal Details */}
              {animal?.vaccines?.map((vaccine) => (
                <tr key={vaccine.name} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                  <td className="border py-2 px-4">{vaccine.name}</td>
                  <td className="border py-2 px-4">
                    <button
                      onClick={() => handleAcceptVaccine(vaccine.name)}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectVaccine(vaccine.name)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}

              {recommendedVaccines.length > 0 && (
                <>
                  <tr>
                    <td colSpan="2" className="text-center font-semibold text-lg py-2">
                      Recommended Vaccines
                    </td>
                  </tr>
                  {recommendedVaccines.map((vaccine) => (
                    <tr key={vaccine.vaccine_name} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                      <td className="border py-2 px-4">{vaccine.vaccine_name}</td>
                      <td className="border py-2 px-4">
                        <button
                          onClick={() => handleAcceptVaccine(vaccine._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleRejectVaccine(vaccine._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manage Vaccine Section */}
      <h1 className="pt-7 text-2xl font-semibold text-center text-gray-800">Manage Vaccine</h1>
      <div className="overflow-x-auto w-5/6 pt-6">
        <table className="w-full border-collapse text-sm sm:text-base bg-white rounded-lg shadow-md">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border py-3 px-4 text-left">Accepted Vaccines</th>
              <th className="border py-3 px-4 text-left">Rejected Vaccines</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 transition duration-200 ease-in-out">
              <td className="border py-2 px-4">
                {acceptedVaccines.map((vaccine) => (
                    <p key={vaccine.vaccine_name}>{vaccine.vaccine_name}</p>
                ))}
              </td>
              <td className="border py-2 px-4">
                {rejectedVaccines.map((vaccine) => (
                  <p key={vaccine.vaccine_name}>{vaccine.vaccine_name}</p>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VaccinationReport;


export const getAcceptedVaccines = async (userAnimalId) => {
    try {
      const response = await fetch(`${API}/vaccine/getacceptedvaccine/${userAnimalId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch accepted vaccines");
      }
  
      const data = await response.json();
      return data.acceptedVaccines;
    } catch (error) {
      console.error("Error fetching accepted vaccines:", error);
      throw error;
    }
  };
  
  
  // 
  export const getRejectedVaccines = async (userAnimalId) => {
    try {
      const response = await fetch(`${API}/vaccine/getrejectedvaccine/${userAnimalId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch rejected vaccines");
      }
  
      const data = await response.json();
      return data.rejectedVaccines;
    } catch (error) {
      console.error("Error fetching rejected vaccines:", error);
      throw error;
    }
  };