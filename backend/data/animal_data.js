const benchmarkData = [
  {
    animalType: "67499c5380d21450c9500ab6",//"Dog"
    breed: "6749a05b0e7291df866a9a1e",//Nepali Sheepdog",
    weight: {
      min: 18,
      max: 30,
    },
    lifespan: {
      min: 12,
      max: 15,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 18, max: 22 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 22, max: 25 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 25, max: 28 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 28, max: 30 },
      },
      {
        age_range: { min: 8, max: 15 },
        weight_range: { min: 30, max: 30 },
      },
    ],
  },
  {
    animalType: "67499c5380d21450c9500ab6",
    breed: "6749a06a0e7291df866a9a23",//Rottweiler",
    weight: {
      min: 35,
      max: 60,
    },
    lifespan: {
      min: 8,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 35, max: 40 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 40, max: 50 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 50, max: 55 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 55, max: 60 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 60, max: 60 },
      },
    ],
  },
  {
    animalType: "67499c5380d21450c9500ab6",
    breed: "6749a0760e7291df866a9a28", //Labrador Retriever",
    weight: {
      min: 25,
      max: 35,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 25, max: 30 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 30, max: 32 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 32, max: 34 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 34, max: 35 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 35, max: 35 },
      },
    ],
  },
  {
    animalType: "67499c5380d21450c9500ab6",
    breed: "6749a0810e7291df866a9a2d",// Pahadi Dog
    weight: {
      min: 12,
      max: 20,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 12, max: 15 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 15, max: 18 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 18, max: 19 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 19, max: 20 },
      },
      {
        age_range: { min: 8, max: 12},
        weight_range: { min: 20, max: 20 },
      },
    ],
  },
  {
    animalType: "67499c5380d21450c9500ab6",
    breed: "6749a08b0e7291df866a9a32", //	Gorkha Dog
    weight: {
      min: 15,
      max: 25,
    },
    lifespan: {
      min: 10,
      max: 12,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 15, max: 18 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 18, max: 22 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 22, max: 24 }
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 24, max: 25 }
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 25, max: 25 }
      }
    ]
  },

  {
    animalType: "67499d1a319afecc1dece5cd", //cow
    breed: "6749a0cd0e7291df866a9a39",//Lulu",
    weight: {
      min: 125,
      max: 150,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 55 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 55, max: 80 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 80, max: 100 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 100, max: 130 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 130, max: 150 },
        milk_per_day: { min: 4, max: 5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 150, max: 170 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },
  {
    animalType: "67499d1a319afecc1dece5cd",
    breed: "67499fcb0e7291df866a9a08",//Achhami",
    weight: {
      min: 40,
      max: 55,
    },
    lifespan: {
      min: 12,
      max: 16,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 55 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 55, max: 70 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 70, max: 90 },
        milk_per_day: { min: 1.5, max: 2 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 90, max: 120 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 120, max: 140 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 12, max: 16 },
        weight_range: { min: 140, max: 160 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
    ],
  },
  {
    animalType: "67499d1a319afecc1dece5cd",
    breed: "67499faf0e7291df866a99f9",//Siri",
    weight: {
      min: 150,
      max: 286.5,
    },
    lifespan: {
      min: 15,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 60, max: 90 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 90, max: 130 },
        milk_per_day: { min: 2, max: 3 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 130, max: 170 },
        milk_per_day: { min: 3, max: 4.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 170, max: 210 },
        milk_per_day: { min: 4.5, max: 6 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 210, max: 240 },
        milk_per_day: { min: 4, max: 5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 240, max: 260 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },
  {
    animalType: "67499d1a319afecc1dece5cd",
    breed: "67499fba0e7291df866a99fe",//Khaila",
    weight: {
      min: 150,
      max: 298,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 70, max: 100 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 100, max: 140 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 140, max: 180 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 180, max: 220 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 220, max: 250 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 250, max: 280 },
        milk_per_day: { min: 3, max: 4 },
      },
    ],
  },
  {
    animalType: "67499d1a319afecc1dece5cd",
    breed: "67499fc30e7291df866a9a03",//Terai",
    weight: {
      min: 150,
      max: 210,
    },
    lifespan: {
      min: 12,
      max: 16,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 50, max: 75 },
        milk_per_day: { min: 0.5, max: 1.5 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 75, max: 110 },
        milk_per_day: { min: 1, max: 2 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 110, max: 140 },
        milk_per_day: { min: 2, max: 2.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 140, max: 170 },
        milk_per_day: { min: 2.5, max: 3 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 170, max: 200 },
        milk_per_day: { min: 3, max: 4 },
      },
      {
        age_range: { min: 12, max: 16 },
        weight_range: { min: 200, max: 220 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
    ],
  },
  {
    animalType: "67499d1a319afecc1dece5cd",
    breed: "67499f8b0e7291df866a99f2",//Pahadi",
    weight: {
      min: 125,
      max: 150,
    },
    lifespan: {
      min: 12,
      max: 18,
    },
    average_temperature: 38.5,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 40, max: 60 },
        milk_per_day: { min: 0.5, max: 1 },
      },
      {
        age_range: { min: 2, max: 4 },
        weight_range: { min: 60, max: 85 },
        milk_per_day: { min: 1, max: 1.5 },
      },
      {
        age_range: { min: 4, max: 6 },
        weight_range: { min: 85, max: 110 },
        milk_per_day: { min: 1.5, max: 2.5 },
      },
      {
        age_range: { min: 6, max: 8 },
        weight_range: { min: 110, max: 140 },
        milk_per_day: { min: 2.5, max: 3.5 },
      },
      {
        age_range: { min: 8, max: 12 },
        weight_range: { min: 140, max: 160 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
      {
        age_range: { min: 12, max: 18 },
        weight_range: { min: 160, max: 180 },
        milk_per_day: { min: 3.5, max: 4.5 },
      },
    ],
  },

  {
    animalType: "67499c6080d21450c9500ab9",//Chicken",
    breed: "67499fe90e7291df866a9a0d",//Sakini",
    weight: {
      min: 1.5,
      max: 2.4,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.5, max: 1.8 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.8, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 4, max: 5 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 4, max: 5 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.8, max: 3.0 },
        egg_production_per_week: { min: 3, max: 4 },
      },
    ],
  },
  {
    animalType: "67499c6080d21450c9500ab9",
    breed: "6749a0030e7291df866a9a12",//Ghanti Khuile",
    weight: {
      min: 1.5,
      max: 2.2,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.5, max: 1.8 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.8, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 2, max: 3 },
      },
    ],
  },
  {
    animalType: "67499c6080d21450c9500ab9",
    breed: "6749a0170e7291df866a9a17",//Puwankh Ulte",
    weight: {
      min: 1.4,
      max: 2.2,
    },
    lifespan: {
      min: 5,
      max: 8,
    },
    average_temperature: 40,
    age_data: [
      {
        age_range: { min: 1, max: 2 },
        weight_range: { min: 1.4, max: 1.7 },
        egg_production_per_week: { min: 1, max: 2 },
      },
      {
        age_range: { min: 2, max: 3 },
        weight_range: { min: 1.7, max: 2.0 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 3, max: 4 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 4, max: 5 },
        weight_range: { min: 2.0, max: 2.2 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 5, max: 6 },
        weight_range: { min: 2.2, max: 2.4 },
        egg_production_per_week: { min: 3, max: 4 },
      },
      {
        age_range: { min: 6, max: 7 },
        weight_range: { min: 2.4, max: 2.6 },
        egg_production_per_week: { min: 2, max: 3 },
      },
      {
        age_range: { min: 7, max: 8 },
        weight_range: { min: 2.6, max: 2.8 },
        egg_production_per_week: { min: 2, max: 3 },
      },
    ],
  },
];

export default benchmarkData;
