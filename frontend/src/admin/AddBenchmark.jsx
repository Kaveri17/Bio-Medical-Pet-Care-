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
    age_data: [],
  });
  const [ageData, setAgeData] = useState([
    { age_range: { min: "", max: "" }, weight_range: { min: "", max: "" } },
  ]);
  //   const router = useRouter();
  const [animals, setAnimals] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [breeds, setBreeds] = useState("");
  const [selectedBreed, setSelectedBreed] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch all animals
  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        console.log(res.error);
        setErrorMessage(res.error);
      } else {
        console.log(res.data);
        setAnimals(res.data);
      }
    });
  }, []);

  console.log("Animal", animals);

  // Fetch animal types and breeds on component mount
  useEffect(() => {
    if (!animalType) return; // Prevent further processing if animalType is not selected

    // Find the selected animal from the animals state
    const selectedAnimal = animals.find((animal) => animal._id === animalType);
    console.log("Selected:", selectedAnimal);

    // If the animal exists, set the breedsList from the selected animal's breed data
    if (selectedAnimal) {
      setBreeds(selectedAnimal.breeds || []); // Assuming `breeds` is a field in your animal object
      setSelectedBreed([]); // Reset selected breed when animal type changes
    } else {
      setBreeds([]); // If animalType doesn't match any animal, clear the breed list
    }
  }, [animalType, animals]);
  console.log("breeds", breeds);

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

//   const handleAddAgeData = () => {
//     setAgeData([
//       ...ageData,
//       {
//         age_range: { min: "", max: "" },
//         weight_range: { min: "", max: "" },
//         milk_per_day: { min: "", max: "" },
//         egg_per_week: { min: "", max: "" },
//       },
//     ]);
//   };

//   const handleAgeDataChange = (index, field, subField, value) => {
//     const updatedAgeData = [...ageData];
//     updatedAgeData[index][field][subField] = value;
//     setAgeData(updatedAgeData);
//   };
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
    try {
      const response = await axios.post(`${API}/benchmark/addbenchmark`, {
        ...formData,
        animalType, // Ensure animalType is sent
        breed: selectedBreed, // Ensure breed is sent
        age_data: ageData,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding benchmark");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Benchmark</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
        >
          <option value="">Select Animal Type</option>
          {animals?.length > 0 &&
            animals?.map((type) => (
              <option key={type._id} value={type._id}>
                {type.animal_type}
              </option>
            ))}
        </select>

        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">Select Breed</option>
          {breeds?.length > 0 &&
            breeds?.map((b) => (
              <option key={b._id} value={b._id}>
                {b.breed_name}
              </option>
            ))}
        </select>

        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Weight"
            value={formData.weight.min}
            onChange={(e) => handleRangeChange(e, "weight", "min")}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Max Weight"
            value={formData.weight.max}
            onChange={(e) => handleRangeChange(e, "weight", "max")}
            required
            className="input"
          />
        </div>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Lifespan"
            value={formData.lifespan.min}
            onChange={(e) => handleRangeChange(e, "lifespan", "min")}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Max Lifespan"
            value={formData.lifespan.max}
            onChange={(e) => handleRangeChange(e, "lifespan", "max")}
            required
            className="input"
          />
        </div>
        <input
          type="number"
          name="average_temperature"
          placeholder="Average Temperature"
          value={formData.average_temperature}
          onChange={handleChange}
          required
          className="input"
        />
        <button type="button" onClick={handleAddAgeData} className="btn">
          Add Age Data
        </button>
        {ageData.map((data, index) => (
          <div key={index} className="age-data-group">
            <h4>Age Data {index + 1}</h4>
            <label>Age Range (Min - Max)</label>
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
            />
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
            />

            <label>Weight Range (Min - Max)</label>
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
            />
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
            />

            <button type="button" onClick={() => removeAgeData(index)}>
              Remove
            </button>
          </div>
        ))}

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBenchmark;
