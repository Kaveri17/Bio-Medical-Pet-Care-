import chickenData from '../data/chicken_data.js';
import dogData from '../data/dog_data.js';
import cowData from '../data/cows_data.js';
import HealthReport from './healthReportModel.js'; // MongoDB model for saving health reports

const getBenchmarkData = (animalType, breed) => {
    let benchmarkData;
  
    switch (animalType) {
      case 'Chicken':
        benchmarkData = chickenData.find(data => data.breed === breed && data.animalType === animalType);
        break;
      case 'Cow':
        benchmarkData = cowData.find(data => data.breed === breed && data.animalType === animalType);
        break;
      case 'Dog':
        benchmarkData = dogData.find(data => data.breed === breed && data.animalType === animalType);
        break;
      default:
        throw new Error('Unknown animal type');
    }
  
    return benchmarkData;
  };
  
  // Main business logic to generate a health report
  const generateHealthReport = (userData) => {
    const { animalType, breed, age, weight, milkProduction, temperature } = userData;
  
    // Get the correct benchmark data for the animal
    const benchmark = getBenchmarkData(animalType, breed);
  
    if (!benchmark) {
      throw new Error('No benchmark data found for the given animal type and breed');
    }
  
    // Find the relevant age data from the benchmark
    const ageData = benchmark.age_data.find(data => age >= data.age_range.min && age <= data.age_range.max);
    if (!ageData) {
      throw new Error('No benchmark data found for the given age range');
    }
  
    // Default health status
    let healthStatus = 'Healthy';
  
    // Compare weight with benchmark data
    if (weight < ageData.weight_range.min || weight > ageData.weight_range.max) {
      healthStatus = 'Underweight or Overweight';
    }
  
    // Compare milk production with benchmark data (only for cows)
    if (milkProduction && animalType === 'Cow') {
      if (milkProduction < ageData.milk_production_per_week.min || milkProduction > ageData.milk_production_per_week.max) {
        healthStatus = 'Milk Production Abnormal';
      }
    }
  
    // Compare temperature with benchmark data (assuming 37-40°C is a normal temperature range for most animals)
    if (temperature && (temperature < 37 || temperature > 40)) {
      healthStatus = 'Temperature Abnormal';
    }
  
    // Create and return a new health report object
    const newReport = new HealthReport({
      animalType,
      breed,
      age,
      weight,
      milkProduction,
      temperature,
      healthStatus,
    });
  
    return newReport;
  };

export { generateHealthReport };
