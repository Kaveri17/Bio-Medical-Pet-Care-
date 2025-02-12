// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { getAllAnimals } from "../api/Animals";

// const API = "http://localhost:5000/api";

// const AddBenchmark = () => {
//   const [formData, setFormData] = useState({
//     animalType: "",
//     breed: "",
//     weight: { min: "", max: "" },
//     lifespan: { min: "", max: "" },
//     average_temperature: "",
//     age_data: [],
//   });
//   const [ageData, setAgeData] = useState([
//     { age_range: { min: "", max: "" }, weight_range: { min: "", max: "" } },
//   ]);
//   //   const router = useRouter();
//   const [animals, setAnimals] = useState([]);
//   const [animalType, setAnimalType] = useState("");
//   const [breeds, setBreeds] = useState("");
//   const [selectedBreed, setSelectedBreed] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Fetch all animals
//   useEffect(() => {
//     getAllAnimals().then((res) => {
//       if (res.error) {
//         console.log(res.error);
//         setErrorMessage(res.error);
//       } else {
//         console.log(res.data);
//         setAnimals(res.data);
//       }
//     });
//   }, []);

//   console.log("Animal", animals);

//   // Fetch animal types and breeds on component mount
//   useEffect(() => {
//     if (!animalType) return; // Prevent further processing if animalType is not selected

//     // Find the selected animal from the animals state
//     const selectedAnimal = animals.find((animal) => animal._id === animalType);
//     console.log("Selected:", selectedAnimal);

//     // If the animal exists, set the breedsList from the selected animal's breed data
//     if (selectedAnimal) {
//       setBreeds(selectedAnimal.breeds || []); // Assuming `breeds` is a field in your animal object
//       setSelectedBreed([]); // Reset selected breed when animal type changes
//     } else {
//       setBreeds([]); // If animalType doesn't match any animal, clear the breed list
//     }
//   }, [animalType, animals]);
//   console.log("breeds", breeds);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRangeChange = (e, field, subField) => {
//     const { value } = e.target;
//     setFormData({
//       ...formData,
//       [field]: { ...formData[field], [subField]: value },
//     });
//   };

// //   const handleAddAgeData = () => {
// //     setAgeData([
// //       ...ageData,
// //       {
// //         age_range: { min: "", max: "" },
// //         weight_range: { min: "", max: "" },
// //         milk_per_day: { min: "", max: "" },
// //         egg_per_week: { min: "", max: "" },
// //       },
// //     ]);
// //   };

// //   const handleAgeDataChange = (index, field, subField, value) => {
// //     const updatedAgeData = [...ageData];
// //     updatedAgeData[index][field][subField] = value;
// //     setAgeData(updatedAgeData);
// //   };
// const handleAddAgeData = () => {
//     setAgeData((prev) => [
//       ...prev,
//       {
//         age_range: { min: "", max: "" },
//         weight_range: { min: "", max: "" },
//         milk_per_day: { min: "", max: "" },
//         egg_per_week: { min: "", max: "" },
//       },
//     ]);
//   };

// const handleAgeDataChange = (index, field, subField, value) => {
//     setAgeData((prevAgeData) =>
//       prevAgeData.map((data, i) =>
//         i === index
//           ? { ...data, [field]: { ...data[field], [subField]: value } }
//           : data
//       )
//     );
//   };

//   const removeAgeData = (index) => {
//     const newAgeData = [...ageData];
//     newAgeData.splice(index, 1);
//     setAgeData(newAgeData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API}/benchmark/addbenchmark`, {
//         ...formData,
//         animalType, // Ensure animalType is sent
//         breed: selectedBreed, // Ensure breed is sent
//         age_data: ageData,
//       });
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error adding benchmark");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Add Benchmark</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <select
//           value={animalType}
//           onChange={(e) => setAnimalType(e.target.value)}
//         >
//           <option value="">Select Animal Type</option>
//           {animals?.length > 0 &&
//             animals?.map((type) => (
//               <option key={type._id} value={type._id}>
//                 {type.animal_type}
//               </option>
//             ))}
//         </select>

//         <select
//           value={selectedBreed}
//           onChange={(e) => setSelectedBreed(e.target.value)}
//         >
//           <option value="">Select Breed</option>
//           {breeds?.length > 0 &&
//             breeds?.map((b) => (
//               <option key={b._id} value={b._id}>
//                 {b.breed_name}
//               </option>
//             ))}
//         </select>

//         <div className="flex space-x-2">
//           <input
//             type="number"
//             placeholder="Min Weight"
//             value={formData.weight.min}
//             onChange={(e) => handleRangeChange(e, "weight", "min")}
//             required
//             className="input"
//           />
//           <input
//             type="number"
//             placeholder="Max Weight"
//             value={formData.weight.max}
//             onChange={(e) => handleRangeChange(e, "weight", "max")}
//             required
//             className="input"
//           />
//         </div>
//         <div className="flex space-x-2">
//           <input
//             type="number"
//             placeholder="Min Lifespan"
//             value={formData.lifespan.min}
//             onChange={(e) => handleRangeChange(e, "lifespan", "min")}
//             required
//             className="input"
//           />
//           <input
//             type="number"
//             placeholder="Max Lifespan"
//             value={formData.lifespan.max}
//             onChange={(e) => handleRangeChange(e, "lifespan", "max")}
//             required
//             className="input"
//           />
//         </div>
//         <input
//           type="number"
//           name="average_temperature"
//           placeholder="Average Temperature"
//           value={formData.average_temperature}
//           onChange={handleChange}
//           required
//           className="input"
//         />
//         <button type="button" onClick={handleAddAgeData} className="btn">
//           Add Age Data
//         </button>
//         {ageData.map((data, index) => (
//           <div key={index} className="age-data-group">
//             <h4>Age Data {index + 1}</h4>
//             <label>Age Range (Min - Max)</label>
//             <input
//               type="number"
//               placeholder="Min Age"
//               value={data.age_range.min}
//               onChange={(e) =>
//                 handleAgeDataChange(
//                   index,
//                   "age_range",
//                   "min",
//                   Number(e.target.value)
//                 )
//               }
//             />
//             <input
//               type="number"
//               placeholder="Max Age"
//               value={data.age_range.max}
//               onChange={(e) =>
//                 handleAgeDataChange(
//                   index,
//                   "age_range",
//                   "max",
//                   Number(e.target.value)
//                 )
//               }
//             />

//             <label>Weight Range (Min - Max)</label>
//             <input
//               type="number"
//               placeholder="Min Weight"
//               value={data.weight_range.min}
//               onChange={(e) =>
//                 handleAgeDataChange(
//                   index,
//                   "weight_range",
//                   "min",
//                   Number(e.target.value)
//                 )
//               }
//             />
//             <input
//               type="number"
//               placeholder="Max Weight"
//               value={data.weight_range.max}
//               onChange={(e) =>
//                 handleAgeDataChange(
//                   index,
//                   "weight_range",
//                   "max",
//                   Number(e.target.value)
//                 )
//               }
//             />

//             <button type="button" onClick={() => removeAgeData(index)}>
//               Remove
//             </button>
//           </div>
//         ))}

//         <button type="submit" className="btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBenchmark;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllAnimals } from "../api/Animals";

const API = "http://localhost:5000/api";

const AddBenchmark = () => {
  const [formData, setFormData] = useState({
    animalType: "",
    breed: "",
    weight: { min: "", max: "" },
    lifespan: { min: "", max: "" },
    average_temperature: "",
    // age_data: [],
  });
  const [ageData, setAgeData] = useState([
    {
      age_range: { min: "", max: "" },
      weight_range: { min: "", max: "" },
      milk_per_day: { min: "", max: "" },
      egg_per_week: { min: "", max: "" },
    },
  ]);
  const [animals, setAnimals] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [breeds, setBreeds] = useState("");
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        console.log(res.error);
        setErrors(res.error);
      } else {
        setAnimals(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (!animalType) return;

    const selectedAnimal = animals.find((animal) => animal._id === animalType);

    if (selectedAnimal) {
      setBreeds(selectedAnimal.breeds || []);
      setSelectedBreed([]);
    } else {
      setBreeds([]);
    }
  }, [animalType, animals]);

  const validateForm = () => {
    let newErrors = {};

    const validateNumberField = (
      field,
      min,
      max,
      label,
      minLimit,
      maxLimit
    ) => {
      if (min === "" || max === "") {
        newErrors[field] = `${label}: Both min (${min || "empty"}) and max (${
          max || "empty"
        }) values are required.`;
      } else if (min < 0 || max < 0) {
        newErrors[
          field
        ] = `${label}: Min (${min}) or max (${max}) cannot be negative.`;
      } else if (Number(min) > Number(max)) {
        newErrors[
          field
        ] = `${label}: Max (${max}) should be greater than min (${min}).`;
      } else if (minLimit !== undefined && maxLimit !== undefined) {
        if (min < minLimit || max > maxLimit) {
          newErrors[
            field
          ] = `${label}: Min (${min}) and Max (${max}) should be between ${minLimit} and ${maxLimit}.`;
        }
      }
    };
    validateNumberField(
      "weight",
      formData.weight.min,
      formData.weight.max,
      "Weight Range"
    );
    validateNumberField(
      "lifespan",
      formData.lifespan.min,
      formData.lifespan.max,
      "Lifespan Range"
    );

    // if (!formData.animalType) newErrors.animalType = "Please select an animal type.";
    // if (!formData.breed) newErrors.breed = "Please select a breed.";
    // if (!formData.average_temperature) newErrors.average_temperature = "Temperature is required.";

    // Temperature Validation: Must be between 35 - 40
    if (!formData.average_temperature) {
      newErrors.average_temperature = "Temperature is required.";
    } else if (
      formData.average_temperature < 35 ||
      formData.average_temperature > 40
    ) {
      newErrors.average_temperature = `Temperature (${formData.average_temperature}) must be between 35 and 40.`;
    }

    ageData.forEach((data, index) => {
      validateNumberField(
        `age_data_${index}_age`,
        data.age_range.min,
        data.age_range.max,
        `Age Data ${index + 1} - Age Range`
      );
      validateNumberField(
        `age_data_${index}_weight`,
        data.weight_range.min,
        data.weight_range.max,
        `Age Data ${index + 1} - Weight Range`
      );

      // Age should not exceed the lifespan range
      if (formData.lifespan.min && formData.lifespan.max) {
        if (
          data.age_range.min < formData.lifespan.min ||
          data.age_range.max > formData.lifespan.max
        ) {
          newErrors[`age_data_${index}_age`] = `Age Data ${
            index + 1
          }: Min age (${data.age_range.min}) and Max age (${
            data.age_range.max
          }) must be within the lifespan range (${formData.lifespan.min}-${
            formData.lifespan.max
          }).`;
        }
      }

      //  Weight should not exceed the general weight range
      if (formData.weight.min && formData.weight.max) {
        if (
          data.weight_range.min < formData.weight.min ||
          data.weight_range.max > formData.weight.max
        ) {
          newErrors[`age_data_${index}_weight`] = `Age Data ${
            index + 1
          }: Min weight (${data.weight_range.min}) and Max weight (${
            data.weight_range.max
          }) must be within the weight range (${formData.weight.min}-${
            formData.weight.max
          }).`;
        }
      }
    });

    setErrors(newErrors);
    // Show the first error in priority order
    const firstErrorKey = Object.keys(newErrors)[0]; // Get the first error key
    if (firstErrorKey) {
      toast.error(newErrors[firstErrorKey]); // Show only the first error
      return false;
    }

    return true; // no error
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRangeChange = (e, field, subField) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: { ...formData[field], [subField]: value },
    });
  };

  const handleAddAgeData = () => {
    setAgeData((prev) => [
      ...prev,
      {
        age_range: { min: "", max: "" },
        weight_range: { min: "", max: "" },
        milk_per_day: { min: "", max: "" },
        egg_per_week: { min: "", max: "" },
      },
    ]);
  };

  const handleAgeDataChange = (index, field, subField, value) => {
    setAgeData((prevAgeData) =>
      prevAgeData.map((data, i) =>
        i === index
          ? { ...data, [field]: { ...data[field], [subField]: value } }
          : data
      )
    );
  };

  const removeAgeData = (index) => {
    const newAgeData = [...ageData];
    newAgeData.splice(index, 1);
    setAgeData(newAgeData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix validation errors.");
      return;
    }
    try {
      const response = await axios.post(`${API}/benchmark/addbenchmark`, {
        ...formData,
        animalType,
        breed: selectedBreed,
        age_data: ageData,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding benchmark");
    }
  };

  // console.log("animaltype:",animalType)
  const handleProductionChange = (index, field, value) => {
    setAgeData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Add Benchmark
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700">
            Select Animal Type
          </label>
          <select
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
            className="w-full p-3 mt-2 border rounded-md"
            required
          >
            <option value="">Select Animal Type</option>
            {animals?.length > 0 &&
              animals?.map((type) => (
                <option key={type._id} value={type._id}>
                  {type.animal_type}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Select Breed
          </label>
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="w-full p-3 mt-2 border rounded-md"
            required
          >
            <option value="">Select Breed</option>
            {breeds?.length > 0 &&
              breeds?.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.breed_name}
                </option>
              ))}
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Min Weight</label>
            <input
              type="number"
              placeholder="Min Weight"
              value={formData.weight.min}
              onChange={(e) => handleRangeChange(e, "weight", "min")}
              required
              className="p-3 border rounded-md mt-2"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Max Weight</label>
            <input
              type="number"
              placeholder="Max Weight"
              value={formData.weight.max}
              onChange={(e) => handleRangeChange(e, "weight", "max")}
              required
              className="p-3 border rounded-md mt-2"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Min Lifespan</label>
            <input
              type="number"
              placeholder="Min Lifespan"
              value={formData.lifespan.min}
              onChange={(e) => handleRangeChange(e, "lifespan", "min")}
              required
              className="p-3 border rounded-md mt-2"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium">Max Lifespan</label>
            <input
              type="number"
              placeholder="Max Lifespan"
              value={formData.lifespan.max}
              onChange={(e) => handleRangeChange(e, "lifespan", "max")}
              required
              className="p-3 border rounded-md mt-2"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Average Temperature</label>
          <input
            type="number"
            name="average_temperature"
            placeholder="Average Temperature"
            value={formData.average_temperature}
            onChange={handleChange}
            required
            className="p-3 border rounded-md mt-2"
          />
        </div>

        <button
          type="button"
          onClick={handleAddAgeData}
          className="w-full p-3 bg-blue-600 text-white rounded-md mt-6"
        >
          Add Age Data
        </button>

        {ageData.map((data, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 mt-4 rounded-md shadow-sm"
          >
            <h4 className="font-semibold text-gray-700">
              Age Data {index + 1}
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Min Age</label>
                <input
                  type="number"
                  placeholder="Min Age"
                  value={data.age_range.min}
                  onChange={(e) =>
                    handleAgeDataChange(
                      index,
                      "age_range",
                      "min",
                      Number(e.target.value)
                    )
                  }
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Max Age</label>
                <input
                  type="number"
                  placeholder="Max Age"
                  value={data.age_range.max}
                  onChange={(e) =>
                    handleAgeDataChange(
                      index,
                      "age_range",
                      "max",
                      Number(e.target.value)
                    )
                  }
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium">Min Weight</label>
                <input
                  type="number"
                  placeholder="Min Weight"
                  value={data.weight_range.min}
                  onChange={(e) =>
                    handleAgeDataChange(
                      index,
                      "weight_range",
                      "min",
                      Number(e.target.value)
                    )
                  }
                  className="border p-2 rounded w-full"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Max Weight</label>
                <input
                  type="number"
                  placeholder="Max Weight"
                  value={data.weight_range.max}
                  onChange={(e) =>
                    handleAgeDataChange(
                      index,
                      "weight_range",
                      "max",
                      Number(e.target.value)
                    )
                  }
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Show Milk Production for Cows */}
    {animalType.toString() === "67499d1a319afecc1dece5cd" && (
      <>
        <input type="number" placeholder="Min Milk Per Day" value={data.milk_per_day.min} onChange={(e) => handleProductionChange(index, "milk_per_day", { ...data.milk_per_day, min: e.target.value })} />
        <input type="number" placeholder="Max Milk Per Day" value={data.milk_per_day.max} onChange={(e) => handleProductionChange(index, "milk_per_day", { ...data.milk_per_day, max: e.target.value })} />
      </>
    )}

    {/*  Show Egg Production for Chickens */}
    {animalType.toString() === "67499c6080d21450c9500ab9" && (
      <>
        <input type="number" placeholder="Min Eggs Per Week" value={data.egg_per_week.min} onChange={(e) => handleProductionChange(index, "egg_per_week", { ...data.egg_per_week, min: e.target.value })} />
        <input type="number" placeholder="Max Eggs Per Week" value={data.egg_per_week.max} onChange={(e) => handleProductionChange(index, "egg_per_week", { ...data.egg_per_week, max: e.target.value })} />
      </>
    )}
            </div>

            <button
              type="button"
              onClick={() => removeAgeData(index)}
              className="w-full bg-red-500 text-white p-3 mt-4 rounded-md"
            >
              Remove Age Data
            </button>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 mt-6 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBenchmark;
