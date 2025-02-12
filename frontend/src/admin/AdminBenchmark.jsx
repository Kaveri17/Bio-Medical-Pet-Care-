import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../layout/AdminSidebar';

const API = "http://localhost:5000/api";

const AdminBenchmark = () => {
    const [showAddBenchmarkModal, setShowAddBenchmarkModal] = useState(false);
    const [newBenchmarkName, setNewBenchmarkName] = useState("");
    const [benchmarks, setBenchmarks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBenchmarks = async () => {
            try {
                const response = await axios.get(`${API}/benchmark/getallbenchmark`);
                console.log("Bench:",response.data)
                setBenchmarks(response.data);
            } catch (err) {
                setError("Failed to load benchmark data");
            } finally {
                setLoading(false);
            }
        };

        fetchBenchmarks();
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete the Benchmark data?")) {
          try {
            const response = await axios.delete(`${API}/benchmark/deletebenchmark/${id}`);
            
            // Check if the message exists in the response and handle accordingly
            if (response.data.message === "Benchmark deleted successfully") {
              setBenchmarks(benchmarks.filter((benchmark) => benchmark._id !== id)); // Update the state to remove the deleted benchmark
            } else {
              alert("Failed to delete benchmark.");
            }
          } catch (error) {
            console.error("Error deleting benchmark:", error);
            alert("An error occurred while deleting the benchmark.");
          }
        }
      };
      

   
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 p-4 ml-[250px]">
                <h2 className="text-2xl font-semibold mb-4">Benchmarks</h2>

                <button
                    onClick={() => navigate('/admin/add-benchmark')}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4"
                >
                    Add Benchmark
                </button>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">S.No</th>
                                <th className="border px-4 py-2">Benchmark Name</th>
                                <th className="border px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {benchmarks.map((benchmark, index) => (
                                <tr key={benchmark._id} className="border">
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">
                         <div className="flex items-center">
                         <span>{benchmark?.animalType?.animal_type}</span>
                         <span className="mx-1">:</span>
                            <span>{benchmark?.breed?.breed_name}</span>
                                   </div>
                                     </td>
                                    <td className="border px-4 py-2">
                                        {/* Add actions here */}
                                        <button 
                   onClick={() => navigate(`/admin/update-benchmark/${benchmark._id}`)}
                                        
                                        className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
                                            Edit
                                        </button>
                                        <button 
                                         onClick={() => handleDelete(benchmark._id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-md ml-2 hover:bg-red-600">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AdminBenchmark;
