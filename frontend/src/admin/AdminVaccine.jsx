import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../layout/AdminSidebar";
const API = "http://localhost:5000/api";
const AdminVaccine = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await axios.get(`${API}/vaccine/getallvaccine`);
        setVaccines(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load vaccines");
        setLoading(false);
      }
    };

    fetchVaccines();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the vaccine?")) {
      try {
        const response = await axios.delete(`${API}/vaccine/delete/${id}`);
        
        // Check if the message exists in the response and handle accordingly
        if (response.data.message === "Vaccine deleted successfully") {
          setVaccines(vaccines.filter((vaccine) => vaccine._id !== id));
        } else {
          alert("Failed to delete vaccine.");
        }
      } catch (error) {
        console.error("Error deleting vaccine:", error);
        alert("An error occurred while deleting the vaccine.");
      }
    }
  };
  

  

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-4 ml-[250px]">
        <h2 className="text-2xl font-semibold mb-4">Vaccines</h2>

        <button
          onClick={() => navigate('/admin/add-vaccine')}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4"
        >
          Add Vaccine
        </button>

        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Vaccine Name</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="text-center py-4">Loading...</td>
              </tr>
            ) : (
              vaccines.map((vaccine, index) => (
                <tr key={vaccine._id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{vaccine.vaccine_name}</td>
                  <td className="border px-4 py-2 flex justify-center space-x-2">
                    <button
                   onClick={() => navigate(`/admin/update-vaccine/${vaccine._id}`)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(vaccine._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminVaccine;
