// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const API = "http://localhost:5000/api";

// const UpdateCategory = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     animalType: "",
//     breeds: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCategoryData = async () => {
//       try {
//         // Fetch animal data using /getanimals/:id
//         const response = await axios.get(`${API}/animal/getanimals/${id}`, { withCredentials: true });
        
//         if (response.data.success) {
//           const { animal_type, breeds } = response.data.data;
          
//           // Populate formData with the fetched animal type and breed names
//           setFormData({
//             animalType: animal_type || "",
//             breeds: breeds ? breeds.map(breed => breed.breed_name).join(", ") : "",
//           });
//         } else {
//           setError("Animal category not found.");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load category data.");
//       }
//     };

//     fetchCategoryData();
//   }, [id]); // Dependency on id, ensuring it fetches data whenever the id changes

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     const { animalType, breeds } = formData;

//     // Validate fields
//     if (!animalType || !breeds) {
//       setError("All fields are required.");
//       return;
//     }

//     const breedList = breeds.split(",").map((breed) => breed.trim());

//     const updatedData = {
//       animal_type: animalType,
//       breeds: breedList,
//     };

//     setLoading(true);
//     try {
//       const response = await axios.put(`${API}/animal/update/${id}`, updatedData, {
//         withCredentials: true,
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       if (response.data.success) {
//         alert("Category updated successfully!");
//         navigate("/admin/add-category");
//       } else {
//         setError(response.data.error || "An unexpected error occurred.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("An unexpected error occurred.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
//       <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-xl">
//         <h1 className="text-3xl font-bold pb-6 text-center text-blue-700">
//           Update Category
//         </h1>
//         {error && <p className="text-red-600 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label
//               htmlFor="animalType"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Animal Type
//             </label>
//             <input
//               type="text"
//               id="animalType"
//               name="animalType"
//               value={formData.animalType}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Enter animal type"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="breeds"
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Breeds (comma separated)
//             </label>
//             <input
//               type="text"
//               id="breeds"
//               name="breeds"
//               value={formData.breeds}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               placeholder="Enter breeds, separated by commas"
//             />
//           </div>

//           <button
//             type="submit"
//             className={`w-full px-6 py-3 rounded-lg shadow-md text-white transition-all ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-500 hover:bg-blue-600"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Update Category"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateCategory;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    setError("");  // Reset error state before validation

    // Animal Type validation
    const animalTypeRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    if (!animalType) {
      setError("Animal type is required.");
      return;
    }
    if (!animalTypeRegex.test(animalType)) {
      setError("Animal type must only contain letters and spaces.");
      return;
    }
    if (animalType.length > 20) {
      setError("Animal type name should not exceed 20 characters.");
      return;
    }

    // Breeds validation
    if (!breeds) {
      setError("Breed(s) are required.");
      return;
    }

    const breedList = breeds.split(",").map((breed) => breed.trim());
    const breedRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
    const invalidBreeds = breedList.filter(
      (breed) => breed === "" || breed.length < 3 || !breedRegex.test(breed)
    );

    if (invalidBreeds.length > 0) {
      setError("Please enter valid breed names (only letters and at least 3 characters).");
      return;
    }

    // Converting breeds from a string back to an array of objects
    const updatedBreeds = breedList.map((b) => ({ breed_name: b }));
    try {
      const response = await axios.put(`${API}/animal/update/${id}`, {
        animal_type: animalType,
        breeds: updatedBreeds, //sending array of objects
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
