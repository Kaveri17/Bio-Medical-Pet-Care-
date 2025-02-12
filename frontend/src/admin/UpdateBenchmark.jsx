import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAllAnimals } from "../api/Animals";
import { useParams } from "react-router-dom";

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
  const [errorMessage, setErrorMessage] = useState("");
  const {id} = useParams()

  console.log("Benchmark id:",id)
  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        setErrorMessage(res.error);
      } else {
        setAnimals(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (id) {
      axios.get(`${API}/updatebenchmark/${id}`).then((res) => {
        const data = res.data;
        setFormData({
          animalType: data.animalType,
          breed: data.breed,
          weight: data.weight,
          lifespan: data.lifespan,
          average_temperature: data.average_temperature,
          age_data: data.age_data,
        });
        setAgeData(data.age_data);
      });
    }
  }, [id]);

  useEffect(() => {
    if (!formData.animalType) return;
    const selectedAnimal = animals.find((animal) => animal._id === formData.animalType);
    setBreeds(selectedAnimal ? selectedAnimal.breeds : []);
  }, [formData.animalType, animals]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API}/benchmark/update/${id}`, {
        ...formData,
        breed: selectedBreed,
        age_data: ageData,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating benchmark");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Update Benchmark</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <select value={formData.animalType} onChange={(e) => setFormData({ ...formData, animalType: e.target.value })}>
          <option value="">Select Animal Type</option>
          {animals.map((type) => (
            <option key={type._id} value={type._id}>{type.animal_type}</option>
          ))}
        </select>

        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">Select Breed</option>
          {breeds.map((b) => (
            <option key={b._id} value={b._id}>{b.breed_name}</option>
          ))}
        </select>

        <input type="number" placeholder="Min Weight" value={formData.weight.min} onChange={(e) => handleRangeChange(e, "weight", "min")} required />
        <input type="number" placeholder="Max Weight" value={formData.weight.max} onChange={(e) => handleRangeChange(e, "weight", "max")} required />

        <input type="number" placeholder="Min Lifespan" value={formData.lifespan.min} onChange={(e) => handleRangeChange(e, "lifespan", "min")} required />
        <input type="number" placeholder="Max Lifespan" value={formData.lifespan.max} onChange={(e) => handleRangeChange(e, "lifespan", "max")} required />

        <input type="number" name="average_temperature" placeholder="Average Temperature" value={formData.average_temperature} onChange={handleChange} required />

        {ageData.map((data, index) => (
          <div key={index}>
            <h4>Age Data {index + 1}</h4>
            <input type="number" placeholder="Min Age" value={data.age_range.min} onChange={(e) => handleAgeDataChange(index, "age_range", "min", Number(e.target.value))} />
            <input type="number" placeholder="Max Age" value={data.age_range.max} onChange={(e) => handleAgeDataChange(index, "age_range", "max", Number(e.target.value))} />

            <input type="number" placeholder="Min Weight" value={data.weight_range.min} onChange={(e) => handleAgeDataChange(index, "weight_range", "min", Number(e.target.value))} />
            <input type="number" placeholder="Max Weight" value={data.weight_range.max} onChange={(e) => handleAgeDataChange(index, "weight_range", "max", Number(e.target.value))} />
          </div>
        ))}

        <button type="submit" className="btn">Update</button>
      </form>
    </div>
  );
};

export default UpdateBenchmark;
