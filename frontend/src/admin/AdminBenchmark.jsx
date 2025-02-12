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
                    onClick={() => setShowAddBenchmarkModal(true)}
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
                         <span>{benchmark.animalType}</span>
                         <span className="mx-1">:</span>
                            <span>{benchmark.breed}</span>
                                   </div>
                                     </td>
                                    <td className="border px-4 py-2">
                                        {/* Add actions here */}
                                        <button className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600">
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

                {/* Modal for Adding Benchmark */}
                {showAddBenchmarkModal && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                            <h3 className="text-xl font-semibold mb-4">Add New Benchmark</h3>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <form onSubmit={handleAddBenchmark}>
                                <label className="block mb-2">Benchmark Name</label>
                                <input
                                    type="text"
                                    value={newBenchmarkName}
                                    onChange={(e) => setNewBenchmarkName(e.target.value)}
                                    placeholder="Enter benchmark name"
                                    className="w-full border rounded-lg px-4 py-2 mb-4"
                                    required
                                />
                                <div className="flex justify-between mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowAddBenchmarkModal(false)}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                    >
                                        Add Benchmark
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminBenchmark;
