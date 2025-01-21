import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUserAnimals } from "../api/Add";
// import { authenticate, isAuthenticate } from "../api/Userapp";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUserAnimals().then((res) => {
      if (res?.error) {
        console.log(res.error);
      } else {
        setAnimals(res);
        console.log("data",res);
      }
    });

  }, []);
  console.log(animals)

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="text-red-500 font-semibold">{error}</p>
        <Link to="/login" className="text-blue-500 underline mt-4">
          Go to Login
        </Link>
      </div>
    );
  }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUserAnimals } from "../api/Add";
// import { authenticate, isAuthenticate } from "../api/Userapp";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllUserAnimals().then((res) => {
      if (res?.error) {
        console.log(res.error);
      } else {
        setAnimals(res);
        console.log("data",res);
      }
    });
  }, []);
  console.log(animals)

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <p className="text-red-500 font-semibold">{error}</p>
        <Link to="/login" className="text-blue-500 underline mt-4">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Add New Category Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition duration-200"
      >
        <i className="fas fa-plus mr-2"></i>
        Add New Category
      </button>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {categories.map((category, index) => (
          <div
            key={animal._id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300 hover:bg-blue-300"
          >
            <div className="w-24 h-24 flex justify-center items-center bg-blue-100 rounded-full mb-4">
              <i
                className={`fas ${
                  animal.animal_type?.animal_type === "Dog"
                    ? "fa-dog"
                    : animal.animal_type?.animal_type === "Cow"
                    ? "fa-cow"
                    : "fa-kiwi-bird"
                } text-4xl text-blue-500`}
              ></i>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {animal.animal_type?.animal_type}
            </h3>
            <p className="text-gray-700 mb-1 font-medium">
              Breed: <span className="font-normal">{animal.breed?.breed_name}</span>
            </p>
            <p className="text-gray-700 mb-1 font-medium">
              Age: <span className="font-normal">{animal?.age} years</span>
            </p>
            <p className="text-gray-700 font-medium">
              Gender: <span className="font-normal">{animal?.gender}</span>
            </p>

            {/* {animal.animal_type?.animal_type === "Cow" && ( */}
              <Link
                to={`/healthtrack/${animal?._id}`}
                className="mt-4 text-blue-500 hover:underline"
              >
                Data Track
              </Link>
            {/* )} */}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Animals;