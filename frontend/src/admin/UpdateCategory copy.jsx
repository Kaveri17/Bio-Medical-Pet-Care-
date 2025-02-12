import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "../layout/AdminSidebar";
import { getAnimalById } from "../api/Animals";

const API = "http://localhost:5000/api";

const UpdateCategory = () => {
  const [animalType, setAnimalType] = useState("");
  const [breeds, setBreeds] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("Location:",location)
  // const animal = location.state?.animal;
  const [animal,setAnimal] = useState("")
  const {id} = useParams()
  console.log("id",id)
  
  useEffect(() => {
    getAnimalById(id).then((data)=>{
      if(data?.error){
        console.log(data.error)
        setError(data.error)
      }else{
        console.log("data",data.data)
        setAnimal(data.data)
        setAnimalType(data.data.animal_type);
        // Extract breed names as a comma-separated string
        const breedNames = data.data.breeds.map((b) => b.breed_name).join(", ");
        setBreeds(breedNames);
      }
    })
  }, []);

  console.log("breeds",animal.breeds)

  const handleUpdate = async () => {
    if (!animalType || !breeds) {
      setError("Animal type and breed(s) are required.");
      return;
    }

 // Converting breeds from a string back to an array of objects
 const breedList = breeds.split(",").map((b) => ({ breed_name: b.trim() }));

    try {
      const response = await axios.put(`${API}/animal/update/${id}`, {
        animal_type: animalType,
        breeds: breedList, //sending array of objects
      });

      if (response.data.success) {
        navigate("/admin/category");
      } else {
        setError(response.data.message || "Failed to update animal type.");
      }
    } catch (error) {
      setError("An error occurred while updating the animal type and breeds.");
      console.error("Error updating animal type:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-4 ml-[250px]">
        <h2 className="text-2xl font-semibold mb-4">Update Animal Type</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
          <label className="block mb-2">Animal Type Name</label>
          <input
            type="text"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
            required
          />

          <label className="block mb-2">Breed(s)</label>
          <input
            type="text"
            value={breeds}
            onChange={(e) => setBreeds(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 mb-4"
            required
          />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={() => navigate("/admin/category")} className="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
