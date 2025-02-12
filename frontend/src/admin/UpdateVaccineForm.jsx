import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from "@mui/material";
import { getAllAnimals } from "../api/Animals";
import { useParams } from "react-router-dom";
import { getVaccineById } from "../api/Vaccine";

const UpdateVaccineForm = () => {
  const [vaccineName, setVaccineName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [effectiveness, setEffectiveness] = useState([{ minAge: '', maxAge: '', effectivenessPercentage: '' }]);
  const [animalTypes, setAnimalTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const {id} = useParams()
  console.log("Vaccine ID:",id)

  const API = "http://localhost:5000/api";

  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        setErrorMessage(res.error);
      } else {
        setAnimalTypes(res.data);
      }
    });
  }, []);

  
    useEffect(() => {
      // if (id) {
        getVaccineById(id)
          .then((res) => {
            const { vaccine_name, animal_type, breeds, effectiveness } = res;
            console.log("res",res)
            setVaccineName(vaccine_name);
            setAnimalType(animal_type);
            setSelectedBreeds(breeds);
            setEffectiveness(effectiveness);
          })
          .catch((err) => setErrorMessage("Error fetching vaccine details."));
      // }
    }, []);
  useEffect(() => {
    if (!animalType) return;
    const selectedAnimal = animalTypes.find((animal) => animal._id === animalType);
    if (selectedAnimal) {
      setBreeds(selectedAnimal.breeds || []);
    } else {
      setBreeds([]);
    }
  }, [animalType, animalTypes]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!/^[A-Za-z\s]{1,30}$/.test(vaccineName)) {
      newErrors.vaccineName = "Vaccine name should be only letters and max 30 characters.";
      isValid = false;
    }

    let maxBreedAge = 600;
    if (selectedBreeds.length > 0) {
      const breedDetails = breeds.find((breed) => selectedBreeds.includes(breed._id));
      if (breedDetails?.benchmarkAge) {
        maxBreedAge = Math.min(maxBreedAge, breedDetails.benchmarkAge);
      }
    }

    effectiveness.forEach((eff, index) => {
      if (isNaN(eff.minAge) || eff.minAge < 0) {
        newErrors[`minAge_${index}`] = "Min age must be a number and >= 0.";
        isValid = false;
      }
      if (isNaN(eff.maxAge) || eff.maxAge > maxBreedAge) {
        newErrors[`maxAge_${index}`] = `Max age must be a number and <= ${maxBreedAge} months.`;
        isValid = false;
      }
      if (isNaN(eff.effectivenessPercentage) || eff.effectivenessPercentage <= 0) {
        newErrors[`effectiveness_${index}`] = "Effectiveness must be a positive number.";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleEffectivenessChange = (index, field, value) => {
    const updatedEffectiveness = [...effectiveness];
    updatedEffectiveness[index][field] = value;
    setEffectiveness(updatedEffectiveness);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const vaccineData = {
      vaccine_name: vaccineName,
      animal_type: animalType,
      breeds: selectedBreeds,
      effectiveness
    };

    setLoading(true);

    try {
      await axios.put(`${API}/vaccine/update/${id}`, vaccineData);
      alert("Vaccine updated successfully!");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error updating vaccine");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ps-72">
      <h1>Update Vaccine Data</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Vaccine Name */}
          <Grid item xs={12}>
            <TextField
              label="Vaccine Name"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}
              fullWidth
              required
              error={!!errors.vaccineName}
              helperText={errors.vaccineName}
            />
          </Grid>

          {/* Animal Type */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Animal Type</InputLabel>
              <Select value={animalType} onChange={(e) => setAnimalType(e.target.value)} required>
                {animalTypes.map((animal) => (
                  <MenuItem key={animal._id} value={animal._id}>
                    {animal.animal_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Breeds */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Breeds</InputLabel>
              <Select
                multiple
                value={selectedBreeds}
                onChange={(e) => setSelectedBreeds(e.target.value)}
                required
              >
                {breeds.map((breed) => (
                  <MenuItem key={breed._id} value={breed._id}>
                    {breed.breed_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Effectiveness Fields */}
          {effectiveness.map((eff, index) => (
            <Grid container spacing={3} key={index} sx={{ marginBottom: 3 }}>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Min Age"
                  type="number"
                  value={eff.minAge}
                  onChange={(e) => handleEffectivenessChange(index, 'minAge', e.target.value)}
                  fullWidth
                  required
                  error={!!errors[`minAge_${index}`]}
                  helperText={errors[`minAge_${index}`]}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Max Age"
                  type="number"
                  value={eff.maxAge}
                  onChange={(e) => handleEffectivenessChange(index, 'maxAge', e.target.value)}
                  fullWidth
                  required
                  error={!!errors[`maxAge_${index}`]}
                  helperText={errors[`maxAge_${index}`]}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Effectiveness %"
                  type="number"
                  value={eff.effectivenessPercentage}
                  onChange={(e) => handleEffectivenessChange(index, 'effectivenessPercentage', e.target.value)}
                  fullWidth
                  required
                  error={!!errors[`effectiveness_${index}`]}
                  helperText={errors[`effectiveness_${index}`]}
                />
              </Grid>
            </Grid>
          ))}

          {/* Submit Button */}
          <Grid item xs={12}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Update Vaccine
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default UpdateVaccineForm;