import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  ListItemText,
  Checkbox,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { getAllAnimals } from "../api/Animals";
import { useNavigate } from "react-router-dom";

const AddVaccineForm = () => {
  const [vaccineName, setVaccineName] = useState("");
  const [animalType, setAnimalType] = useState("");
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [effectiveness, setEffectiveness] = useState([
    { minAge: "", maxAge: "", effectivenessPercentage: "" },
  ]);
  const [animalTypes, setAnimalTypes] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const API = "http://localhost:5000/api";

  // Fetch animal types and breeds on component mount
  useEffect(() => {
    getAllAnimals().then((res) => {
      if (res.error) {
        console.log(res.error);
        setErrorMessage(res.error);
      } else {
        console.log(res.data);
        setAnimalTypes(res.data);
      }
    });
  }, []);

  // Fetch animal types and breeds on component mount
  useEffect(() => {
    if (!animalType) return; // Prevent further processing if animalType is not selected

    // Find the selected animal from the animals state
    const selectedAnimal = animalTypes.find(
      (animal) => animal._id === animalType
    );

    // If the animal exists, set the breedsList from the selected animal's breed data
    if (selectedAnimal) {
      setBreeds(selectedAnimal.breeds || []); // Assuming `breeds` is a field in your animal object
      setSelectedBreeds([]); // Reset selected breed when animal type changes
    } else {
      setBreeds([]); // If animalType doesn't match any animal, clear the breed list
    }
  }, [animalType, animalTypes]);

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    // Validate vaccine name
    if (!/^[A-Za-z\s]{1,30}$/.test(vaccineName)) {
      newErrors.vaccineName = "Vaccine name should be only letters and max 30 characters.";
      isValid = false;
    }

    // Get max age limit based on selected breed benchmark
    let maxBreedAge = 240; // Default max limit
    if (selectedBreeds.length > 0) {
      const breedDetails = breeds.find((breed) => selectedBreeds.includes(breed._id));
      if (breedDetails?.benchmarkAge) {
        maxBreedAge = Math.min(maxBreedAge, breedDetails.benchmarkAge);
      }
    }

    // Validate effectiveness fields
    effectiveness.forEach((eff, index) => {
      if (isNaN(eff.minAge) || eff.minAge < 0 || eff.minAge >= 240 ) {
        newErrors[`minAge_${index}`] = "Min age must be a number, should be positive and must be under 240 months.";
        isValid = false;
      }

      if (isNaN(eff.maxAge) || eff.maxAge > maxBreedAge || eff.minAge>=eff.maxAge) {
        newErrors[`maxAge_${index}`] = `Max age must be a number, shouldnot exceed minimum age and <= ${maxBreedAge} months`;
        isValid = false;
      }

      // if (isNaN(eff.minAge) || eff.minAge >= 240) {
      //   newErrors[`mainAge_${index}`] = `Min age must be under 240 months.`;
      //   isValid = false;
      // }

      if (isNaN(eff.effectivenessPercentage) || eff.effectivenessPercentage <= 0 ) {
        newErrors[`effectiveness_${index}`] = "Effectiveness must be a positive number.";
        isValid = false;
      }
      if (isNaN(eff.effectivenessPercentage) || eff.effectivenessPercentage > 100 ) {
        newErrors[`effectiveness_${index}`] = "Effectiveness must not increase than 100.";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Handle effectiveness fields
  const handleAddEffectiveness = () => {
    setEffectiveness([
      ...effectiveness,
      { minAge: "", maxAge: "", effectivenessPercentage: "" },
    ]);
  };

  const handleEffectivenessChange = (index, field, value) => {
    const updatedEffectiveness = [...effectiveness];
    updatedEffectiveness[index][field] = value;
    setEffectiveness(updatedEffectiveness);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    const vaccineData = {
      vaccine_name: vaccineName, // backend name matching
      animal_type: animalType,
      breeds: selectedBreeds,
      effectiveness,
    };
    setLoading(true);
    console.log("vaccineData:", vaccineData);

    try {
      const response = await axios.post(
        `${API}/vaccine/addvaccine`,
        vaccineData
      );
      alert("Vaccine added successfully!");
      console.log(response.data);
      navigate("/admin/adminvaccine");

    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error adding vaccine");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div>
    //   <h1>Add Vaccine Data</h1>
    //   {errorMessage && <p>{errorMessage}</p>}

    //   <form onSubmit={handleSubmit}>
    //     <Grid container spacing={2}>
    //       {/* Vaccine Name */}
    //       <Grid item xs={12}>
    //         <TextField
    //           label="Vaccine Name"
    //           value={vaccineName}
    //           onChange={(e) => setVaccineName(e.target.value)}
    //           fullWidth
    //           required
    //         />
    //       </Grid>

    //       {/* Animal Type */}
    //       <Grid item xs={12} sm={6}>
    //         <FormControl fullWidth>
    //           <InputLabel>Animal Type</InputLabel>
    //           <Select
    //             value={animalType}
    //             onChange={(e) => setAnimalType(e.target.value)}
    //             required
    //           >
    //             {animalTypes.map((animal) => (
    //               <MenuItem key={animal._id} value={animal._id}>
    //                 {animal.animal_type}
    //               </MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //       </Grid>

    //       {/* Breeds */}
    //       {/* <Grid item xs={12} sm={6}>
    //         <FormControl fullWidth>
    //           <InputLabel>Breeds</InputLabel>
    //           <Select
    //             multiple
    //             value={selectedBreeds}
    //             onChange={(e) => setSelectedBreeds(e.target.value)}
    //             required
    //           >
    //             {breeds.map((breed) => (
    //               <MenuItem key={breed._id} value={breed._id}>
    //                 {breed.breed_name}
    //               </MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //       </Grid> */}
    //       <Grid item xs={12} sm={6}>
    //         <FormControl fullWidth>
    //           <InputLabel>Breeds</InputLabel>
    //           <Select
    //             multiple
    //             value={selectedBreeds}
    //             onChange={(e) => setSelectedBreeds(e.target.value)}
    //             renderValue={(selected) =>
    //               selected
    //                 .map(
    //                   (id) =>
    //                     breeds.find((breed) => breed._id === id)?.breed_name
    //                 )
    //                 .join(", ")
    //             }
    //             required
    //           >
    //             {breeds.map((breed) => (
    //               <MenuItem key={breed._id} value={breed._id}>
    //                 <Checkbox
    //                   checked={selectedBreeds.indexOf(breed._id) > -1}
    //                 />
    //                 <ListItemText primary={breed.breed_name} />
    //               </MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //       </Grid>

    //       {/* Effectiveness */}
    //       {effectiveness.map((eff, index) => (
    //         <Grid container spacing={2} key={index}>
    //           <Grid item xs={4}>
    //             <TextField
    //               label="Min Age"
    //               type="number"
    //               value={eff.minAge}
    //               onChange={(e) =>
    //                 handleEffectivenessChange(index, "minAge", e.target.value)
    //               }
    //               fullWidth
    //               required
    //             />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextField
    //               label="Max Age"
    //               type="number"
    //               value={eff.maxAge}
    //               onChange={(e) =>
    //                 handleEffectivenessChange(index, "maxAge", e.target.value)
    //               }
    //               fullWidth
    //               required
    //             />
    //           </Grid>
    //           <Grid item xs={4}>
    //             <TextField
    //               label="Effectiveness %"
    //               type="number"
    //               value={eff.effectivenessPercentage}
    //               onChange={(e) =>
    //                 handleEffectivenessChange(
    //                   index,
    //                   "effectivenessPercentage",
    //                   e.target.value
    //                 )
    //               }
    //               fullWidth
    //               required
    //             />
    //           </Grid>
    //         </Grid>
    //       ))}
    //       <Grid item xs={12}>
    //         <Button onClick={handleAddEffectiveness}>Add Effectiveness</Button>
    //       </Grid>

    //       {/* Submit Button */}
    //       <Grid item xs={12}>
    //         {loading ? (
    //           <p>Loading...</p>
    //         ) : (
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             color="primary"
    //             fullWidth
    //           >
    //             Add Vaccine
    //           </Button>
    //         )}
    //       </Grid>
    //     </Grid>
    //   </form>
    // </div>
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
      <Paper sx={{ padding: 3, maxWidth: 900, width: '100%', boxShadow: 3, backgroundColor: '#ffffff' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#1976d2' }}>
          Add Vaccine Data
        </Typography>
        {errorMessage && <Typography color="error" align="center">{errorMessage}</Typography>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Vaccine Name */}
            <Grid item xs={12}>
              <TextField
                label="Vaccine Name"
                value={vaccineName}
                onChange={(e) => setVaccineName(e.target.value)}
                fullWidth
                required
                sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
                error={!!errors.vaccineName}
                helperText={errors.vaccineName}
              />
            </Grid>

            {/* Animal Type */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Animal Type</InputLabel>
                <Select
                  value={animalType}
                  onChange={(e) => setAnimalType(e.target.value)}
                  sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
                >
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
              <FormControl fullWidth required>
                <InputLabel>Breeds</InputLabel>
                <Select
                  multiple
                  value={selectedBreeds}
                  onChange={(e) => setSelectedBreeds(e.target.value)}
                  renderValue={(selected) => selected.map(id => breeds.find(breed => breed._id === id)?.breed_name).join(', ')}
                  sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
                >
                  {breeds.map((breed) => (
                    <MenuItem key={breed._id} value={breed._id}>
                      <Checkbox checked={selectedBreeds.indexOf(breed._id) > -1} />
                      <ListItemText primary={breed.breed_name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Effectiveness Fields */}
            {effectiveness.map((eff, index) => (
              <Grid container spacing={3} key={index} marginTop={1} marginLeft={0.5}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Min Age In Months"
                    type="number"
                    value={eff.minAge}
                    onChange={(e) => handleEffectivenessChange(index, 'minAge', e.target.value)}
                    fullWidth
                    required
                    sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
                    error={!!errors[`minAge_${index}`]}
                  helperText={errors[`minAge_${index}`]}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Max Age In Months"
                    type="number"
                    value={eff.maxAge}
                    onChange={(e) => handleEffectivenessChange(index, 'maxAge', e.target.value)}
                    fullWidth
                    required
                    sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
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
                    sx={{ backgroundColor: '#f0f0f0', borderRadius: 1 }}
                    error={!!errors[`effectiveness_${index}`]}
                  helperText={errors[`effectiveness_${index}`]}
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button
                onClick={handleAddEffectiveness}
                variant="outlined"
                sx={{ marginTop: 2, marginBottom: 2, backgroundColor: '#1976d2', color: '#fff' }}
              >
                Add Effectiveness
              </Button>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              {loading ? (
                <Typography align="center">Loading...</Typography>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ padding: 1.5, fontSize: '1.1rem', backgroundColor: '#1976d2' }}
                >
                  Add Vaccine
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddVaccineForm;
