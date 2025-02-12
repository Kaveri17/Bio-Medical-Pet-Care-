import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Grid } from '@mui/material';

const AddVaccineData = ({ animalTypes, breeds, onSubmit }) => {
  console.log("animalType:",animalTypes)
  const [vaccineName, setVaccineName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [selectedBreeds, setSelectedBreeds] = useState([]);
  const [effectiveness, setEffectiveness] = useState([{ minAge: '', maxAge: '', effectivenessPercentage: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ 
       vaccine_name: vaccineName,   // backend name matching
      animal_type: animalType,     
      breeds: selectedBreeds, 
       effectiveness });
  };

  const handleAddEffectiveness = () => {
    setEffectiveness([...effectiveness, { minAge: '', maxAge: '', effectivenessPercentage: '' }]);
  };

  const handleEffectivenessChange = (index, field, value) => {
    const updatedEffectiveness = [...effectiveness];
    updatedEffectiveness[index][field] = value;
    setEffectiveness(updatedEffectiveness);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Vaccine Name"
            value={vaccineName}
            onChange={(e) => setVaccineName(e.target.value)}
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Animal Type</InputLabel>
            <Select
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value)}
              required
            >
              {animalTypes.map((animal) => (
                <MenuItem key={animal._id} value={animal._id}>
                  {animal.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

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
                  {breed.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {effectiveness.map((eff, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={4}>
              <TextField
                label="Min Age"
                type="number"
                value={eff.minAge}
                onChange={(e) => handleEffectivenessChange(index, 'minAge', e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Max Age"
                type="number"
                value={eff.maxAge}
                onChange={(e) => handleEffectivenessChange(index, 'maxAge', e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Effectiveness %"
                type="number"
                value={eff.effectivenessPercentage}
                onChange={(e) => handleEffectivenessChange(index, 'effectivenessPercentage', e.target.value)}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={handleAddEffectiveness}>Add Effectiveness</Button>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Vaccine
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddVaccineData;
