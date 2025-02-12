// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { getAllAnimals } from "../api/Animals";
// import { useParams } from "react-router-dom";
// import { getBenchmarkById } from "../api/BenchMark";

// const API = "http://localhost:5000/api";

// const UpdateBenchmark = () => {
//   const [formData, setFormData] = useState({
//     animalType: "",
//     breed: "",
//     weight: { min: "", max: "" },
//     lifespan: { min: "", max: "" },
//     average_temperature: "",
//     age_data: [],
//   });
//   const [ageData, setAgeData] = useState([]);
//   const [animals, setAnimals] = useState([]);
//   const [breeds, setBreeds] = useState([]);
//   const [selectedBreed, setSelectedBreed] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [benchmark, setBenchmark] = useState(null);
//   const { id } = useParams();

//   console.log("Benchmark id:", id);

//   useEffect(() => {
//     getAllAnimals().then((res) => {
//       if (res.error) {
//         setErrorMessage(res.error);
//       } else {
//         setAnimals(res.data);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     getBenchmarkById(id).then((res) => {
//       if (res.error) {
//         setErrorMessage(res.error);
//       } else {
//         setBenchmark(res);
//         // Populate formData with benchmark data after it's fetched
//         const { animalType, breed, weight, lifespan, average_temperature, age_data } = res;
//         setFormData({
//           animalType: animalType._id,
//           breed: breed._id,
//           weight,
//           lifespan,
//           average_temperature,
//           age_data,
//         });
//         setAgeData(age_data); // Set age data for dynamic fields
//         setSelectedBreed(breed._id); // Set selected breed
//       }
//     });
//   }, [id]);

//   useEffect(() => {
//     if (!formData.animalType) return;
//     const selectedAnimal = animals.find((animal) => animal._id === formData.animalType);
//     setBreeds(selectedAnimal ? selectedAnimal.breeds : []);
//   }, [formData.animalType, animals]);

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

//   const handleAgeDataChange = (index, field, subField, value) => {
//     setAgeData((prevAgeData) =>
//       prevAgeData.map((data, i) =>
//         i === index ? { ...data, [field]: { ...data[field], [subField]: value } } : data
//       )
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`${API}/benchmark/updatebenchmark/${id}`, {
//         ...formData,
//         breed: selectedBreed,
//         age_data: ageData,
//       });
//       toast.success(response.data.message);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error updating benchmark");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Update Benchmark</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <select value={formData.animalType} onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}>
//           <option value="">Select Animal Type</option>
//           {animals.map((type) => (
//             <option key={type._id} value={type._id}>{type.animal_type}</option>
//           ))}
//         </select>

//         <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
//           <option value="">Select Breed</option>
//           {breeds.map((b) => (
//             <option key={b._id} value={b._id}>{b.breed_name}</option>
//           ))}
//         </select>

//         <input type="number" placeholder="Min Weight" value={formData.weight.min} onChange={(e) => handleRangeChange(e, "weight", "min")} required />
//         <input type="number" placeholder="Max Weight" value={formData.weight.max} onChange={(e) => handleRangeChange(e, "weight", "max")} required />

//         <input type="number" placeholder="Min Lifespan" value={formData.lifespan.min} onChange={(e) => handleRangeChange(e, "lifespan", "min")} required />
//         <input type="number" placeholder="Max Lifespan" value={formData.lifespan.max} onChange={(e) => handleRangeChange(e, "lifespan", "max")} required />

//         <input type="number" name="average_temperature" placeholder="Average Temperature" value={formData.average_temperature} onChange={handleChange} required />

//         {ageData.map((data, index) => (
//           <div key={index}>
//             <h4>Age Data {index + 1}</h4>
//             <input type="number" placeholder="Min Age" value={data.age_range.min} onChange={(e) => handleAgeDataChange(index, "age_range", "min", Number(e.target.value))} />
//             <input type="number" placeholder="Max Age" value={data.age_range.max} onChange={(e) => handleAgeDataChange(index, "age_range", "max", Number(e.target.value))} />

//             <input type="number" placeholder="Min Weight" value={data.weight_range.min} onChange={(e) => handleAgeDataChange(index, "weight_range", "min", Number(e.target.value))} />
//             <input type="number" placeholder="Max Weight" value={data.weight_range.max} onChange={(e) => handleAgeDataChange(index, "weight_range", "max", Number(e.target.value))} />
//           </div>
//         ))}

//         <button type="submit" className="btn">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateBenchmark;

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllAnimals } from "../api/Animals";
import { useParams } from "react-router-dom";
import { getBenchmarkById } from "../api/BenchMark";

const API = "http://localhost:5000/api";

const UpdateBenchmark = () => {
  const [formData, setFormData] = useState({
    animalType: "",
    breed: "",
    weight: { min: "", max: "" },
    lifespan: { min: "", max: "" },
    average_temperature: "",
    age_data: [],
  });
  const [ageData, setAgeData] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [errors, setErrors] = useState("");
  const [benchmark, setBenchmark] = useState(null);
  const { id } = useParams();

  console.log("Benchmark id:", id);

  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        setErrors(res.error);
      } else {
        setAnimals(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getBenchmarkById(id).then((res) => {
      if (res.error) {
        setErrors(res.error);
      } else {
        setBenchmark(res);
        // Populate formData with benchmark data after it's fetched
        const { animalType, breed, weight, lifespan, average_temperature, age_data } = res;
        setFormData({
          animalType: animalType._id,
          breed: breed._id,
          weight,
          lifespan,
          average_temperature,
          age_data,
        });
        setAgeData(age_data); // Set age data for dynamic fields
        setSelectedBreed(breed._id); // Set selected breed
      }
    });
  }, [id]);

  useEffect(() => {
    if (!formData.animalType) return;
    const selectedAnimal = animals.find((animal) => animal._id === formData.animalType);
    setBreeds(selectedAnimal ? selectedAnimal.breeds : []);
  }, [formData.animalType, animals]);

  const validateForm = () => {
    let newErrors = {};

    const validateNumberField = (field, min, max, label, minLimit, maxLimit) => {
        if (min === "" || max === "") {
          newErrors[field] = `${label}: Both min (${min || "empty"}) and max (${max || "empty"}) values are required.`;
        } else if (min < 0 || max < 0) {
          newErrors[field] = `${label}: Min (${min}) or max (${max}) cannot be negative.`;
        } else if (Number(min) > Number(max)) {
          newErrors[field] = `${label}: Max (${max}) should be greater than min (${min}).`;
        } else if (minLimit !== undefined && maxLimit !== undefined) {
          if (min < minLimit || max > maxLimit) {
            newErrors[field] = `${label}: Min (${min}) and Max (${max}) should be between ${minLimit} and ${maxLimit}.`;
          }
        }
      };
    validateNumberField("weight", formData.weight.min, formData.weight.max, "Weight Range");
    validateNumberField("lifespan", formData.lifespan.min, formData.lifespan.max, "Lifespan Range");

    // if (!formData.animalType) newErrors.animalType = "Please select an animal type.";
    // if (!formData.breed) newErrors.breed = "Please select a breed.";
    // if (!formData.average_temperature) newErrors.average_temperature = "Temperature is required.";


   // Temperature Validation: Must be between 35 - 40
  if (!formData.average_temperature) {
    newErrors.average_temperature = "Temperature is required.";
  } else if (formData.average_temperature < 35 || formData.average_temperature > 40) {
    newErrors.average_temperature = `Temperature (${formData.average_temperature}) must be between 35 and 40.`;
  }

  ageData.forEach((data, index) => {
    validateNumberField(`age_data_${index}_age`, data.age_range.min, data.age_range.max, `Age Data ${index + 1} - Age Range`);
    validateNumberField(`age_data_${index}_weight`, data.weight_range.min, data.weight_range.max, `Age Data ${index + 1} - Weight Range`);

    // Age should not exceed the lifespan range
    if (formData.lifespan.min && formData.lifespan.max) {
        if (data.age_range.min < formData.lifespan.min || data.age_range.max > formData.lifespan.max) {
          newErrors[`age_data_${index}_age`] = `Age Data ${index + 1}: Min age (${data.age_range.min}) and Max age (${data.age_range.max}) must be within the lifespan range (${formData.lifespan.min}-${formData.lifespan.max}).`;
        }
      }
  
      //  Weight should not exceed the general weight range
      if (formData.weight.min && formData.weight.max) {
        if (data.weight_range.min < formData.weight.min || data.weight_range.max > formData.weight.max) {
          newErrors[`age_data_${index}_weight`] = `Age Data ${index + 1}: Min weight (${data.weight_range.min}) and Max weight (${data.weight_range.max}) must be within the weight range (${formData.weight.min}-${formData.weight.max}).`;
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

    
      return true;// no error
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

  const handleAgeDataChange = (index, field, subField, value) => {
    setAgeData((prevAgeData) =>
      prevAgeData.map((data, i) =>
        i === index ? { ...data, [field]: { ...data[field], [subField]: value } } : data
      )
    );
  };

  const handleAddAgeData = () => {
    setAgeData((prev) => [
      ...prev,
      { age_range: { min: "", max: "" }, weight_range: { min: "", max: "" } },
    ]);
  };

  const handleRemoveAgeData = (index) => {
    const updatedAgeData = ageData.filter((_, i) => i !== index);
    setAgeData(updatedAgeData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
        toast.error("Please fix validation errors.");
        return;
      }
    try {
      const response = await axios.put(`${API}/benchmark/updatebenchmark/${id}`, {
        ...formData,
        breed: selectedBreed,
        age_data: ageData,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating benchmark");
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
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Update Benchmark</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Select Animal Type</label>
          <select
            value={formData.animalType}
            onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Animal Type</option>
            {animals.map((type) => (
              <option key={type._id} value={type._id}>
                {type.animal_type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium">Select Breed</label>
          <select
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Breed</option>
            {breeds.map((b) => (
              <option key={b._id} value={b._id}>
                {b.breed_name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Min Weight</label>
            <input
              type="number"
              placeholder="Min Weight"
              value={formData.weight.min}
              onChange={(e) => handleRangeChange(e, "weight", "min")}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Max Weight</label>
            <input
              type="number"
              placeholder="Max Weight"
              value={formData.weight.max}
              onChange={(e) => handleRangeChange(e, "weight", "max")}
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Min Lifespan</label>
            <input
              type="number"
              placeholder="Min Lifespan"
              value={formData.lifespan.min}
              onChange={(e) => handleRangeChange(e, "lifespan", "min")}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Max Lifespan</label>
            <input
              type="number"
              placeholder="Max Lifespan"
              value={formData.lifespan.max}
              onChange={(e) => handleRangeChange(e, "lifespan", "max")}
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-medium">Average Temperature</label>
          <input
            type="number"
            name="average_temperature"
            placeholder="Average Temperature"
            value={formData.average_temperature}
            onChange={handleChange}
            required
            className="border p-2 rounded w-full"
          />
        </div>

        <div className="space-y-4">
          {ageData.map((data, index) => (
            <div key={index} className="space-y-2">
              <h4 className="font-medium text-lg">Age Data {index + 1}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">Min Age</label>
                  <input
                    type="number"
                    placeholder="Min Age"
                    value={data.age_range.min}
                    onChange={(e) =>
                      handleAgeDataChange(index, "age_range", "min", Number(e.target.value))
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Max Age</label>
                  <input
                    type="number"
                    placeholder="Max Age"
                    value={data.age_range.max}
                    onChange={(e) =>
                      handleAgeDataChange(index, "age_range", "max", Number(e.target.value))
                    }
                    className="border p-2 rounded w-full"
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
                      handleAgeDataChange(index, "weight_range", "min", Number(e.target.value))
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
                      handleAgeDataChange(index, "weight_range", "max", Number(e.target.value))
                    }
                    className="border p-2 rounded w-full"
                  />
                </div>
                              {/* Show Milk Production for Cows */}
    {/* {animalType.toString() === "67499d1a319afecc1dece5cd" && (
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
    )} */}
              </div>

              <button
                type="button"
                onClick={() => handleRemoveAgeData(index)}
                className="text-red-500 mt-2"
              >
                Remove Age Data
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddAgeData}
            className="text-blue-500 mt-2"
          >
            Add Age Data
          </button>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-3 rounded mt-6 w-full">
          Update Benchmark
        </button>
      </form>
    </div>
  );
};

export default UpdateBenchmark;

