import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5001/api";

const AdminAnimal = () => {
  const [showModal, setShowModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    animal_type: "",
    breeds: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/animal/getallanimal`)
      .then((response) => {
        setAnimals(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching animals:", error);
      });
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
    setNewAnimal({ animal_type: "", breeds: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAnimal.animal_type || !newAnimal.breeds) {
      alert("Please fill out all fields");
      return;
    }

    const breedList = newAnimal.breeds
      .split(",")
      .map((breed) => breed.trim());

    const data = {
      animal_type: newAnimal.animal_type,
      breeds: breedList,
    };

    try {
      const response = await axios.post(`${API}/animal/addanimal`, data);
      console.log("Animal added successfully:", response.data);

      setAnimals((prevAnimals) => [...prevAnimals, response.data.data]);

      handleModalClose();
    } catch (error) {
      console.error("Error adding animal:", error);
      alert("Failed to add animal. Please try again.");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/update-animal/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      setAnimals((prevAnimals) =>
        prevAnimals.filter((animal) => animal._id !== id)
      );
      alert("Animal deleted successfully!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Animals</h2>

      {/* Add Animal Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
      >
        Add Animal
      </button>

      {/* Animal List Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Animal Type</th>
              <th className="border border-gray-300 px-4 py-2">Breeds</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((animal, index) => (
              <tr key={animal._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{animal.animal_type}</td>
                <td className="px-4 py-2">
                  {animal.breeds.map((breed) => breed.breed_name).join(", ")}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleEdit(animal._id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(animal._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding New Animal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Add New Animal</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="animal_type" className="block text-gray-700 mb-2">
                  Animal Type
                </label>
                <input
                  type="text"
                  id="animal_type"
                  name="animal_type"
                  value={newAnimal.animal_type}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="breeds" className="block text-gray-700 mb-2">
                  Breeds 
                </label>
                <input
                  type="text"
                  id="breeds"
                  name="breeds"
                  value={newAnimal.breeds}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Animal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnimal;
